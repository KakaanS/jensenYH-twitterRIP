const sendTweet = async (tweetMessage) => {
    try {
      const token = localStorage.getItem("jwt"); 
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          tweet: tweetMessage,
        })
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  export default sendTweet;