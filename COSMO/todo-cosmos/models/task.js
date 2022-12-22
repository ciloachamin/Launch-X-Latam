const { init } = require('../app');

const CosmosClient =require('@azure/cosmos').CosmosClient;
const debug =require('debug')('todo-cosmos:task');

let partitionKey = undefined;

//Este es el modelo de datos
class Task{
    /**
     * Lee y añade y actualiza tareas en Cosmos DB
     * @param {CosmosClient} cosmosClient 
     * @param {string} databasesID 
     * @param {string} containerID 
     */
    constructor(cosmosClient,databaseID,containerID){
        this.client=cosmosClient;
        this.databaseID=databaseID;
        this.containerID=containerID;

        this.database=null;
        this.container=null;

    }
    async init(){
        debug("inicializando base de datos")
        const dbResponse=await this.client.databases.createIfNotExists({
            id: this.databaseID
        });
        this.database=dbResponse.database;
        debug("inicializando contenedor")
        const contenResponse=await this.database.containe.createIfNotExists({
            id:this.containerID
        });
        this.container=contenResponse.container;
    }
    /**
     * Encuentra un objeto en la base de datos
     * @param {string} querySpec 
     * @returns {resources} El objeto 
     */
    async find(querySpec){
        debug("Buscando en la base de datos");
        if(!this.container){
            throw new Error("Contenedor no se ha iniciado")
        }

        const {resources}=await this.container.items.query(querySpec).fetchALl();
        return resources;
    }

    /**
     * Crea el Item enviado a Cosmo DB
     * @param {*} item 
     * @returns {resources} item crado en la base de datos
     */
    async addItem(item){
        debug("Anadiendo item a la DB");
        item.data=Date.now();
        item.completed=false;
        const {recurso:doc}=await this.container.items.create(item);
        return doc;

    }
    async updateItem(itemID){
        debug("Actualizando Item");
        const doc = await this.getItem(itemId);
        doc.completed=true;

        const {resource:replaced }= await this.container.item(itemID,partitionKey).replaced(doc);
    }
    /**
     * 
     * @param {*} itemID 
     * @returns 
     */
    async getItem(itemID){
        debug("Buscando ITEM en la DB");
        const {resources }= await this.container.item(itemID,partitionKey);
        return resources;
    }
}

module.exports=Task;