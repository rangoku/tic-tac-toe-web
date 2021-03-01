import winston from 'winston'

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'server.log',
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())
        })
    ]
})

export default logger