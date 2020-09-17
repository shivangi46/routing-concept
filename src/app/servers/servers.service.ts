
export class ServerService{

    servers = [
        {
            id : 1,
            name : "Productionserver",
            status : "Online"

        },
        {
            id : 2,
            name : "Testserver",
            status : "Offline"

        },
        {
            id : 3,
            name : "Devserver",
            status : "Online"

        }
    ]

    getserver(){
        return this.servers;
    }

    getserverid(id :number){
    const server = this.servers.find(
        (s) => {
            return  s.id === id
    });
        return server;
    }

    OnUpdate(id : number , serverInfo : { name : string, status : string }){
        const server = this.servers.find(
            (s) => {
            return   s.id === id;
        })
        if(server){
          server.name =serverInfo.name;
          server.status = serverInfo.status;
        }
    }
}