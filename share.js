
export function shareViaAPI(){
    console.log('inside api');
    const shareData = {
      title: "QUIZ",
      text: "Quiz Maker APP",
      url: "https://quizzmaker.netlify.app/",
    };
    (async () => {
      try {
        await navigator.share(shareData);     
      } catch (error) {
        console.log(error);
      }
    })();
  }