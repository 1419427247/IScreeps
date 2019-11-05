var TaskManager = require('./TaskManager');

var CrawlerManager = function(){
    var crawlers = [];
    this.addCrawler = function(crawler){
        if(crawlers[crawler.name] == null){
            crawlers[crawler.name] = crawler;
        }
    }
    this.update = function(){
        for (const i of crawlers) {
            i.update();
        }
    }
};

CrawlerManager.CrawlerState = {
    None : 0,
    Move : 1,
    Construction : 2,
    Excavate : 3,
};

CrawlerManager.Crawler = function(crawler){
    var crawler = crawler || null;
    var taskManager = null;
    var taskQueue = [];
    var memory = [];
    var move = function(params){
        console.log('移动');
        
        return true;        
    };
    var construction = function(params){
        console.log('建造');


        return true;
    };
    var excavate = function(params){
        console.log('挖掘');


        return true;
    };
    this.update = function(){
        if(taskQueue.length == 0)
            return;
        switch(taskQueue[0].Task){
            case CrawlerState.Move:
                    if(move(taskQueue[0].Args))
                        taskQueue.shift();
                break;
            case CrawlerState.Construction:
                    if(construction(taskQueue[0].Args))
                        taskQueue.shift();
                break;
            case CrawlerState.Excavate:
                    if(Excavate(this.taskQueue[0].Args))
                        taskQueue.shift();
                break;
        }
    }
};



var crawlerManager = new CrawlerManager();


crawlerManager.update();
