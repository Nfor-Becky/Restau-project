import React, { useState } from "react";


const MealHistory = () => {


  const [filter,setFilter] = useState("All");



  const plans = [

    {
      date:"2 April 2026",
      time:"12:30 PM",
      plan:"Monthly Plan",
      status:"Success",
      icon:"📅"
    },


    {
      date:"19 April 2026",
      time:"11:45 AM",
      plan:"Daily Plan",
      status:"Success",
      icon:"📅"
    },


    {
      date:"18 April 2026",
      time:"1:45 PM",
      plan:"Weekly Plan",
      status:"Success",
      icon:"📅"
    },


    {
      date:"23 April 2026",
      time:"12:30 PM",
      plan:"Daily Plan",
      status:"Success",
      icon:"📅"
    },


    {
      date:"2 May 2026",
      time:"02:15 PM",
      plan:"Monthly Plan",
      status:"Success",
      icon:"📅"
    },

    {
        date:"16 May 2026",
        time:"02:55 PM",
        plan:"Monthly Plan",
        status:"Success",
        icon:"📅"
      },

      {
        date:"1 May 2026",
        time:"02:30 AM",
        plan:"Daily Plan",
        status:"Success",
        icon:"📅"
      }


  ];

  const backDashboard = () => {

    window.history.back();

  };

  return (

    <div className="
      min-h-screen
      w-full
      bg-gray-100
      flex
      flex-col
    ">

      <div className="
        w-full
        min-h-screen
        bg-white
        flex
        flex-col
      ">

       {/* HEADER */}


        <div className="
          bg-green-700
          h-20
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
          relative
        ">



          <button

            onClick={backDashboard}

            className="
              absolute
              left-6
              text-3xl
            ">
                 ←

          </button>

          Meal History



        </div>


        {/* FILTER */}



        <div className="
          flex
          justify-end
          px-8
          py-5 ">


          <select


            value={filter}


            onChange={(e)=>setFilter(e.target.value)}


            className="
              border
              rounded-lg
              px-4
              py-2
              outline-none
            ">

           <option>
              All
            </option>

            <option>
              Monthly Plan
            </option>

            <option>
              Weekly Plan
            </option>

            <option>
              Daily Plan
            </option>

         </select>



        </div>


       {/* HISTORY LIST */}

        <div className="
          flex-1
          px-6
          md:px-20
          space-y-5
        ">

        {
          plans.filter(item =>filter==="All"|| item.plan===filter).map((item,index)=>(


            <div
             key={index}


              className="
                w-full
                border-b
                pb-5
                flex
                items-center
                justify-between">


             {/* LEFT SIDE */}


              <div className="
                flex
                items-center
                gap-5">

               <div className="
                  w-12
                  h-12
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  text-xl">

                  {item.icon}


                </div>

                <div>
                   <p className="
                    text-gray-700
                    font-semibold">

                    {item.date}
                  </p>

                  <p className="
                    text-gray-500
                    text-sm">


                    {item.time}


                  </p>





                  <p className="
                    text-gray-800
                    font-semibold">


                    {item.plan}
                 </p>

                </div>

              </div>

             {/* RIGHT SIDE */}



              <div className="
                text-right ">



                <p className="
                  text-gray-700
                  font-semibold  ">


                  {item.plan}


                </p>

                <p className="
                  text-green-700
                  font-semibold ">

                 {item.status}

                </p>

             </div>

            </div>)) }

        </div>


        {/* MOBILE NAVIGATION */}

        <div className="
          md:hidden
          fixed
          bottom-0
          left-0
          w-full
          bg-white
          border-t
          flex
          justify-around
          py-3">

         <div>
           🏠
           <p className="text-xs">
              Dashboard

            </p>

          </div>

          <div>
            🍽️
            <p className="text-xs">

              Meal Plan

            </p>

          </div>

          <div className="
            text-green-700">
           📜

           <p className="text-xs">

              History

            </p>
          </div>

          <div>

            👤

           <p className="text-xs">

              Profile

            </p>

         </div>

        </div>


        {/* BACK BUTTON */}

        <div className="
          flex
          justify-center
          py-8
          mb-10">



          <button

            onClick={backDashboard}

            className="
              bg-green-700
              text-white
              px-10
              py-3
              rounded-full
              hover:bg-green-800
            ">

            ← Back to Dashboard

          </button>

        </div>

      </div>

   </div> );
   };



export default MealHistory;