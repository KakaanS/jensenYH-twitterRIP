const sendTweet = async (tweetMessage) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3002/tweets/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        tweet: tweetMessage,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default sendTweet;