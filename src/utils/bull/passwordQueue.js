import Queue from "bull";

const passwordQueue = new Queue("passwordQueue",{
    redis:{ host:"127.0.0.1",port:6379 }
});

export  default passwordQueue;