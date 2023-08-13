import NotificationBox from "../Notification Box/NotificationBox";

const NotificationItems = props =>{
    return (
        <div className="not-items">
            {
                props.notList.map((notItem,index) =>{
                    return(                    
                    <NotificationBox
                        key={notItem.id}
                        clicked={()=>props.markAsReadHandler(index)}
                        notType={notItem.notificationType}
                        pImg={notItem.pAvatar}
                        pName={notItem.pName}
                        notMsg={notItem.notMsg}
                        notContent={notItem.notContent}
                        notDuration={notItem.notDuration}
                        isUnread={notItem.isNotUnread}
                        pmContent={notItem.pmContent}
                        commentedPic={notItem.commentedPic}
                    />);
                })
            }      
      </div>
    );
}

export default NotificationItems;