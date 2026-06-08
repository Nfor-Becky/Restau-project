import React, { useState } from "react";

const MealPlans = () => {

  const [selectedPlan, setSelectedPlan] = useState({
    name: "Weekly Meal Plan",
    credits: "4 credits",
    price: "400 FCFA"
  });

  const [payment, setPayment] = useState("MTN Momo Cameroon");
  const [phone, setPhone] = useState("");


  const plans = [
    {
      name: "1-Day Meal Plan",
      credits: "1 credit",
      price: "100 FCFA"
    },
    {
      name: "Weekly Meal Plan",
      credits: "4 credits",
      price: "400 FCFA"
    },
    {
      name: "Monthly Meal Plan",
      credits: "16 credits",
      price: "1600 FCFA"
    }
  ];



  return (

    <div

      style={{
        minHeight:"100vh",
        background:"#f8faf8",
        fontFamily:"Arial, Helvetica, sans-serif",
        margin:0,
        padding:"60px 20px",
        display:"flex",
        justifyContent:"center"
      }}

    >


      <div

        style={{

          width:"100%",
          maxWidth:"980px",
          minHeight:"100vh",

          background:"white",

          padding:"50px 45px",
          borderRadius:"26px",
          boxShadow:"0 18px 60px rgba(0,0,0,0.08)",
          boxSizing:"border-box"

        }}

      >




        <h2

          style={{

            margin:0,
            color:"#075c2d",
            fontSize:"32px",
            fontWeight:"700"

          }}

        >

          Buy Meal Plan

        </h2>




        <p

          style={{

            color:"#555",
            fontSize:"16px",
            marginTop:"14px",
            marginBottom:"32px",
            lineHeight:1.65

          }}

        >

          Choose a meal plan and pay with MTN Momo or Orange Money Cameroon.

        </p>






        {/* Vertical Meal Plans */}

        <div

          style={{

            display:"flex",

            flexDirection:"column",

            gap:"15px",

            width:"100%",

            maxWidth:"750px",

            marginBottom:"25px"

          }}

        >


        {
          plans.map((plan,index)=>(


            <div

              key={index}

              onClick={()=>setSelectedPlan(plan)}

              className="meal-plan-card"
            style={{

                width:"100%",

                height:"100px",

                borderRadius:"18px",

                border:
                selectedPlan.name===plan.name
                ?
                "2.5px solid #075c2d"
                :
                "1px solid #ddd",

                background:
                selectedPlan.name===plan.name
                ?
                "#f2faf5"
                :
                "white",

                padding:"22px",

                cursor:"pointer",

                display:"flex",

                justifyContent:"space-between",

                alignItems:"center",

                boxSizing:"border-box",

                transition:"transform 0.2s ease, box-shadow 0.2s ease"

              }}


            >


              <div>


                <div

                  style={{

                    fontSize:"18px",

                    fontWeight:"600",

                    color:"#333"

                  }}

                >

                  {plan.name}

                </div>



                <div

                  style={{

                    fontSize:"15px",

                    color:"#777",

                    marginTop:"10px"

                  }}

                >

                  {plan.credits}

                </div>



              </div>





              <div

                style={{

                  color:"#075c2d",

                  fontWeight:"700",

                  fontSize:"18px"

                }}

              >

                {plan.price}

              </div>


            </div>


          ))

        }


        </div>







        <div

          style={{

            width:"100%",

            maxWidth:"750px"

          }}

        >




        <label

          style={{

            fontSize:"14px",

            color:"#555"

          }}

        >

          Payment Method

        </label>





        <select

          value={payment}

          onChange={(e)=>setPayment(e.target.value)}


          style={{

            width:"100%",

            height:"54px",

            marginTop:"10px",

            borderRadius:"14px",

            border:"1px solid #ddd",

            padding:"0 16px",

            background:"white",

            fontSize:"15px"

          }}

        >

          <option>
            MTN Momo Cameroon
          </option>

          <option>
            Orange Money Cameroon
          </option>

        </select>








        <label

          style={{

            display:"block",

            marginTop:"18px",

            fontSize:"14px",

            color:"#555"

          }}

        >

          Phone Number

        </label>





        <input


          value={phone}

          onChange={(e)=>setPhone(e.target.value)}

          placeholder="e.g. 67123456"


          style={{

            width:"100%",

            height:"54px",

            marginTop:"10px",

            borderRadius:"14px",

            border:"1px solid #ddd",

            padding:"0 16px",

            boxSizing:"border-box",

            fontSize:"15px"

          }}


        />








        <button
          className="meal-plan-button"
          style={{
            marginTop:"22px",
            width:"100%",
            height:"54px",
            borderRadius:"28px",
            border:"none",
            background:"#075c2d",
            color:"white",
            fontSize:"16px",
            fontWeight:"700",
            cursor:"pointer"
          }}


        >

          Pay {selectedPlan.price}

        </button>







        <button
          onClick={()=>window.history.back()}
          className="meal-plan-button secondary"
          style={{
            marginTop:"18px",
            width:"100%",
            height:"54px",
            borderRadius:"28px",
            border:"1px solid #ddd",
            background:"white",
            color:"#555",
            fontSize:"16px",
            fontWeight:"600",
            cursor:"pointer"
          }}


        >

          Back to Dashboard

        </button>




        </div>



      </div>


    </div>

  );

};


export default MealPlans;