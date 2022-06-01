
function Page({page}){

    const transformContent = () => {
        let newContent = []
        newContent.push('\"')
        let currentIndex = 0
        page.tokens.forEach(token => {
            //Append punctuation that may appear before the first token
            while (currentIndex < token.position[0]) {
                newContent.push(page.content[currentIndex])
                currentIndex++
            }
            // Create span containing onClick handler
            let tokenSpan = <span onClick={() => handleClick(token.value)}>{page.content.slice(token.position[0], token.position[1])}</span>
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
    }

    const handleClick = (token) =>{
        //open new page with token
        console.log('clicked with', token);
    }

    return (<div>
        {transformContent()}
    </div>)
}

export default Page