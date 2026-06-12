import React, { useState } from "react";


const StudentProfile = () => {


  const [message,setMessage] = useState("");



  const handlePassword = () => {

    setMessage("Change password clicked");

  };


  const handleLogout = () => {

    setMessage("Logging out...");

  };


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
  rounded-none
  shadow-none
  overflow-hidden
  flex
  flex-col
">





        {/* TOP GREEN HEADER */}

        <div className="
          bg-green-700
          h-24
          flex
          items-center
          justify-center
          text-white
          text-3xl
          font-bold
        ">

          Profile

        </div>








        {/* PROFILE SECTION */}

        <div className="
          flex
          flex-col
          items-center
          justify-center
          p-8
        ">





          {/* Avatar Above Text */}

          <div className="
            w-36
            h-36
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            text-7xl
            shadow-md
          ">

            👤


          </div>






          <h2 className="
            mt-5
            text-3xl
            font-bold
            text-gray-800
          ">

            Ngwa Thaddeus

          </h2>




          <p className="
            text-gray-500
            text-lg
          ">

            SC24B755

          </p>



          <p className="
            text-gray-500
          ">

            STUDENT

          </p>








        </div>








        {/* DETAILS */}


        <div className="
          px-8
          md:px-20
          pb-10
        ">



          <div className="space-y-6">





            <div className="
              flex
              justify-between
              border-b
              pb-4
            ">

              <span className="
                font-semibold
                text-gray-600
              ">

                Email:

              </span>


              <span>

                ngwathaddeus12@gmail.com

              </span>


            </div>








            <div className="
              flex
              justify-between
              border-b
              pb-4
            ">


              <span className="
                font-semibold
                text-gray-600
              ">

                Phone:

              </span>


              <span>

                +237 686 395 456

              </span>



            </div>









            <div className="
              flex
              justify-between
              border-b
              pb-4
            ">



              <span className="
                font-semibold
                text-gray-600
              ">

                Meal Plan:

              </span>



              <span>

                Monthly Plan

              </span>
            </div>
          </div>
          {/* ACTION BUTTONS */}
          <div className="
            mt-10
            space-y-5
          ">
            <button
              onClick={handlePassword}
              className="
                w-full
                p-4
                border
                rounded-xl
                text-left
                hover:bg-gray-100
                flex
                gap-3
                items-center
              "

            >

              🔒

              Change Password


            </button>








            <button


              onClick={handleLogout}


              className="
                w-full
                p-4
                border
                rounded-xl
                text-left
                text-red-600
                hover:bg-red-50
                flex
                gap-3
                items-center
              "


            >


              🚪

              Logout


            </button>






          </div>







          {

            message &&

            (

              <p className="
                mt-5
                text-green-700
                font-semibold
              ">

                {message}


              </p>

            )


          }


{/* BACK TO DASHBOARD BUTTON */}

<div className="
  flex
  justify-center
  mt-8
">


<button

  onClick={backDashboard}


  className="
    bg-green-700
    text-white
    px-8
    py-3
    rounded-full
    hover:bg-green-800
    transition
  "


>

  ← Back to Dashboard


</button>


</div>





        </div>






      </div>





    </div>


  );

};



export default StudentProfile;