import express from 'express'
 const app=express()
 
 
 app.get('/api/jokes', (req, res) => {
    const jokes = [
      { id: 1, title:'joke1',content: "Why don't scientists trust atoms? Because they make up everything!" },
      { id: 2, title:'joke2',content: "I told my computer I needed a break, and it said: 'No problem, I'll go to sleep.'" },
      { id: 3, title:'joke3',content: "Why was the math book sad? Because it had too many problems." }
    ];
    
    res.send(jokes);
  });
  
 const port=process.env.PORT || 3000

 app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
 })
