import { OpenAI } from "langchain";
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import path from "path";
import fs from "fs";

export const process_doc = async (filename: string | undefined, question: string) => {
    const model = new OpenAI({
        modelName: "gpt-4o", // Piso modelo anterior, estaba deprecado
        temperature: 0.7,
    });

    // Definir la ruta del archivo PDF
    const filePath = path.resolve(__dirname, '..', 'uploads', filename || '');
    console.log(`__dirname: ${__dirname}`);
    console.log(`Ruta del archivo PDF: ${filePath}`);
    console.log(`Ruta de trabajo actual: ${process.cwd()}`);

    if (!fs.existsSync(filePath)) {
        console.error(`El archivo ${filePath} no existe.`);
        throw new Error(`El archivo ${filePath} no existe.`);
    }

    const loader = new PDFLoader(filePath, {
        splitPages: false,
    });

    try {
        console.log('Cargando el documento...');
        const doc = await loader.load();
        console.log(`Documento cargado: ${doc.length} páginas.`);

        console.log('Creando el almacén de vectores...');
        const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings());
        console.log('Almacén de vectores creado.');

        const vectorStoreRetriever = vectorStore.asRetriever();
        const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

        console.log('Llamando a la cadena de QA...');
        const result = await chain.call({
            query: question,
        });

        console.log('Respuesta obtenida.');
        return result;
    } catch (error) {
        console.error('Error durante el procesamiento:', error);
        throw error;
    }
};
