async function short(){
    const url= document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if(response.ok){
        const d=await response.text();
        document.getElementById("result").innerHTML=`
        Shortened URL : <a href="${d}" target="_blank">${d}</a>`;

    }
    else{
        document.getElementById('result').innerHTML="Error shortening URL";
    }

}