import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import { useState } from "react";


function App() {
  //Data of contents in three priceCards
  let data = [
    {
      plan: "FREE",
      price: 0,
      currency: "$",
      period: "month",
      listItems: [
        {
          itemName : "Single User",
          isDisabled : false
        },
        {
          itemName : "5GB Storage",
          isDisabled : false
        },
        {
          itemName : "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemName : "Community Access",
          isDisabled : false
        },
        {
          itemName : "Unlimited Private Projects",
          isDisabled : true
        },
        {
          itemName : "Dedicated Phone Support",
          isDisabled : true
        },
        {
          itemName : "Free Subdomain",
          isDisabled : true
        },
        {
          itemName : "Monthly Status Reports",
          isDisabled : true
        }
      ]
    },
    {
      plan : "Plus",
        price : 9,
        period : 'month',
        currency : "$",
        listItems : [
          {
            itemName : "5 User",
            isDisabled : false
          },
          {
            itemName : "50GB Storage",
            isDisabled : false
          },
          {
            itemName : "Unlimited Public Projects",
            isDisabled : false
          },
          {
            itemName : "Community Access",
            isDisabled : false
          },
          {
            itemName : "Unlimited Private Projects",
            isDisabled : false
          },
          {
            itemName : "Dedicated Phone Support",
            isDisabled : false
          },
          {
            itemName : "Free Subdomain",
            isDisabled : false
          },
          {
            itemName : "Monthly Status Reports",
            isDisabled : true
          }
        ]
    },
    {
      plan : "Pro",
        price : 49,
        period : 'month',
        currency : "$",
        listItems : [
          {
            itemName : "Unlimited Users",
            isDisabled : false
          },
          {
            itemName : "150GB Storage",
            isDisabled : false
          },
          {
            itemName : "Unlimited Public Projects",
            isDisabled : false
          },
          {
            itemName : "Community Access",
            isDisabled : false
          },
          {
            itemName : "Unlimited Private Projects",
            isDisabled : false
          },
          {
            itemName : "Dedicated Phone Support",
            isDisabled : false
          },
          {
            itemName : "Free Subdomain",
            isDisabled : false
          },
          {
            itemName : "Monthly Status Reports",
            isDisabled : false
          }
        ]
    }
  ];

  //useState to get the selected plan
  const [currentPlan, setCurrentPlan] = useState("No plan selected!");

  let selectedPlan = (plan) => {
    setCurrentPlan(plan);
  };
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
            <h3 className="col-lg-12 text-center" style={{marginBottom: "15px"}}>
              Selected Plan : {currentPlan}
            </h3>
        </div>
        <div className="row">
          {
          data.map((price, index) => {
            return <Card key={index} details={price} handleBtnClick={selectedPlan}></Card>
          })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
