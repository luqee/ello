import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page(props){
    
    const transformContent = (page) => {
        if (page) {
            if (page.content) {
                let newContent = []
                newContent.push('\"')
                let currentIndex = 0
                page.tokens.forEach((token, indx) => {
                    //Append punctuation that may appear before the first token
                    while (currentIndex < token.position[0]) {
                        newContent.push(page.content[currentIndex])
                        currentIndex++
                    }
                    // Create span containing onClick handler
                    let tokenSpan = <span key={indx} onClick={() => handleClick(token.value)}>{page.content.slice(token.position[0], token.position[1])}</span>
                    newContent.push(tokenSpan)
                    currentIndex = token.position[1]
                });
                //Append punctuation that may appear after the last token
                while (currentIndex <= page.content.length-1) {
                    newContent.push(page.content[currentIndex])
                    currentIndex++
                }
                newContent.push('\"')
                return (<p>{newContent}</p>)
            }else{
                return (<p></p>)
            }
        }else{
            return (<p></p>)
        }
    }

    const navigate = useNavigate()
    const handleClick = (token) =>{
        //open new page with token
        navigate('/token', {state: {token: token}})
    }

    return (<div id="pageContent">
        {transformContent(props.page)}
    </div>)
}

export default Page