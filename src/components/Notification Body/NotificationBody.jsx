import React, {useState} from 'react';
import NotificationHeader from '../Notification Header/NotificationHeader';
import NotificationItems from '../Notification Items/NotificationItems';
import notificationsList from "../../assets/script/script"; 

const unreadCounter = notificationsList.filter(notItem =>{
    return (notItem.isNotUnread === true);
}).length;

const NotificationBody = () =>{
    const [state, setState] = useState({
        notList: notificationsList ,
        notifyCounter: unreadCounter
    });

    const markAllAsReadhandler = ()=>{
        const notifyList = [...state.notList]
        notifyList.forEach(notItem=>{
            if(notItem.isNotUnread){
                notItem.isNotUnread = false;
            }
        })
        setState({notList: notifyList,
            notifyCounter: notifyList.filter(notItem =>{
                return (notItem.isNotUnread === true);
            }).length
        });
    }

    const markAsReadHandler = (index)=>{
        const notifyList = [...state.notList]
        if(notifyList[index].isNotUnread){
            notifyList[index].isNotUnread = false;
            setState({
                notList:notifyList,
                notifyCounter: notifyList.filter(notItem =>{
                    return (notItem.isNotUnread === true);
                }).length
            })
        }
    }
    
    return (
        <div className="not-body sm:rounded-lg p-3 shadow-md md:w-7/12 sm:w-9/12 bg-white font-plusJakarta">
            <NotificationHeader
                unreadCount={state.notifyCounter}
                clicked={markAllAsReadhandler}
            />
            <NotificationItems
                notList={state.notList}
                markAsReadHandler={markAsReadHandler}
            />
      </div>  
    );
}

export default NotificationBody;