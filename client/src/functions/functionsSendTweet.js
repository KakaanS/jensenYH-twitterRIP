const theConnector = import.meta.env.VITE_API_URL;
// `${theConnector}`

const sendTweet = async (tweetMessage) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${theConnector}/tweets/tweet`, {
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default sendTweet;
