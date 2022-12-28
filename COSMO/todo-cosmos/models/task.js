//const {init} = require('../app');

const CosmosClient =require('@azure/cosmos').CosmosClient;
const debug =require('debug')('todo-cosmos:task');

//let partitionKey = false;
//const partitionKey= ["/completed"]

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
        debug("inicializando BD")
        const dbResponse=await this.client.databases.createIfNotExists({
            id: this.databaseID
        });
        this.database=dbResponse.database;
        debug("inicializando contenedor...")
        const contenResponse=await this.database.containers.createIfNotExists({
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

        const {resources}=await this.container.items.query(querySpec).fetchAll();
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
        //console.log("Item ID  "+itemID)
        const doc = await this.getItem(itemID);
        console.log("<DOC"+doc)
        doc.completed=true;

        const {resource: replaced }= await this.container.item(itemID,partitionKey).replaced(doc);
        return replaced;
    }
    /**
     * 
     * @param {*} itemID 
     * @returns 
     */
    async getItem(itemID){
        //console.log("Item ID  "+itemID)
        debug("Buscando ITEM en la DB");
        const {resources}= await this.container.item(itemID,partitionKey);
        console.log("resource  "+resources);
        return resources;
    }
}

module.exports=Task;