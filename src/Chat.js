import React,{ useState,useEffect } from "react";
import {useSelector} from "react-redux";
import "./Chat.css";
import { IconButton,Button } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Attachment from "@material-ui/icons/Attachment";
import Message from "./Message";
import {selectChatId, selectChatName} from "./features/chatSlice";
import db,{auth} from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";


function Chat() {

    const user=useSelector(selectUser);
    const [input,setInput]=useState("");
    const [messages, setMessages] = useState([]);
    const chatName=useSelector(selectChatName);
    const chatId=useSelector(selectChatId);


    useEffect(() => {
        if(chatId)
        {db.collection("chats").doc(chatId).collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot => 
            (
                setMessages(snapshot.docs.map(doc => (

                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))


            )
            
            )}
    }, [chatId])


    const sendMessage = e =>{
        e.preventDefault();
        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName,


        });

        setInput("");

    };


    return(

        <div className="chat">
            {/* Chat header*/}
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span></h4>
                <strong >

                
                <IconButton variant="outlined">

                <SearchIcon/>
                </IconButton>
                


                    {/* derop down*/}
                    <div class="dropdown">
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
        <div class="dropdown-content">
        <Button className="chat__button" onClick={() => auth.signOut()}>Sign Out</Button>
          
        </div>
      </div>


                    {/* derop down*/}





                     {/*   <Button  onClick={() => auth.signOut()}>Sign Out</Button> */}
        
</strong>
            </div>

            {/* Chat messages */}
            <div className="chat__messages">
                <FlipMove>

                {messages.map(({id,data}) => (
                    <Message key={id} contents={data}/>
                ))}
                </FlipMove>

               

            </div>


            {/* Chat Input */}
            <div className="chat__input">
                <IconButton>

                <InsertEmoticon className="chat__mic"/>
                </IconButton>

                <IconButton>
                    <Attachment/>
                </IconButton>
                
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="type your message" type="text"/>
                    <button onClick={sendMessage}>Send</button>

                </form>
                <IconButton>
                <MicNoneIcon className="chat__mic"/>
                </IconButton>

            </div>

            </div>
        
    );
}

export default Chat;