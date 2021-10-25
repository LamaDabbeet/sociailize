import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faMap, faBars,faChevronLeft,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss';

export const Navbar=(props)=> {
const [isOpened,setIsOpen ]=useState(false);
 const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
   const listData = [
  {    
    listTitle: 'ASTHMA',
    list: ['SPOTTING THE SYMPTOMS','ASTHMA FIRST-AID TIPS','MANAGING YOUR CONDITION','HOW CAN ASTHMA BE CONTROLLED?','MONITORING ASTHMA'] 
  },
  {
   listTitle: 'SEVERE ASTHMA',
    list: ['List Item1','List Item2'] 
  },
  {
    listTitle: 'COPD',
    list: ['List Item1','List Item2','List Item3'] 
  }
];
    return (
    <React.Fragment>
    <div className="wrapper" className={'sidenav ' +(isOpened ? 'opened':'closed')}>
        <div className="top-sidebar">
           <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faChevronLeft} className="me-2" onClick={()=>setIsOpen(false)}/>
              <div className="avatar"></div>
           </div>
        </div>
        <div id="mySidenav" >
          <div className="wrapper">
                <div className="accordion">
                    {listData.map((item, index) => {
                        return (
                        <>
                            <div className="wrap" onClick={() => toggle(index)} key={index}>
                            <h1>{item.listTitle}</h1>
                            <span className={'rotate ' + (clicked === index ?'up':'')}><FontAwesomeIcon  icon={faChevronDown} /> </span>
                            </div>
                            {clicked === index ? (
                            <div className="dropdown">
                                <ul>
                                {item.list.map((listMember,i)=>{
                                return (<li key={i} className="d-flex align-items-center"><div>{listMember}</div></li>);
                                })}   
                                </ul>    
                            </div>
                            ) : null}
                        </>
                        );
                    })}
                </div>
          </div>
        </div> 
    </div>
    
    <div className="navbar">
        <div className="avatar"></div>
        <div className="d-flex align-items-center">
            <a className="mx-2"><FontAwesomeIcon icon={faMap} /></a> |
            <a className="mx-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></a> |
            <a className="ms-2"><FontAwesomeIcon icon={faBars} onClick={()=>setIsOpen(true)} /></a>
        </div>
    </div>
    </React.Fragment>)
};