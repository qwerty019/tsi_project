// const express = require('express');
import express from "express";
import cors from "cors";
//import bodyParser from "bodyParser"
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.json()); 



//http://localhost:5000/api/data

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });





// Middleware
//app.use(cors()); // Позволяет запрашивать сервер с других доменов
//app.use(bodyParser.json()); // Для парсинга JSON


let dataStore = [];
dataStore[0] = {title: "Apple",  message: "Hello!"}


//Метод GET
app.get("/api/data", (req, res) => {
    res.json(dataStore);
  });

// Обработка POST-запросов
app.post('/api/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData);
  res.status(201).json({
    data: newData,
    allData: dataStore // Возвращаем обновленный массив
  }); // Отправляем ответ с новыми данными
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});