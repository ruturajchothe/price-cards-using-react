import React from "react";

function Card(props){
    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.details.plan}</h5>
            <h6 className="card-price text-center">{props.details.currency}{props.details.price}<span className="period">/{props.details.period}</span></h6>
            <hr/>
            <ul className="fa-ul">
             {
                 props.details.listItems.map((item,index) => {
                    return !item.isDisabled ? 
                    <li key={index}><span className="fa-li"><i className="fas fa-check"></i></span><b>{item.itemName}</b></li> : 
                    <li key={index} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span><b>{item.itemName}</b></li>
                 })
             }
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase" onClick={() => props.handleBtnClick(props.details.plan)}>Button</a>
          </div>
        </div>
      </div>
    )
}

export default Card;