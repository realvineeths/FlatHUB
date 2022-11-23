import React, { useCallback, useContext, useEffect } from "react";
import { StateContext } from "../StateContext";
import Loader from '../loader';
import Navbar from '../components/nav';

const Fabric = () => {
  const [stateContext, setContext] = useContext(StateContext);

  const fetchUserDetails = useCallback(() => {
    fetch("http://localhost:8081/users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${stateContext.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setContext((oldValues) => {
          return { ...oldValues, details: data };
        });
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          window.location.reload();
        } else {
          setContext((oldValues) => {
            return { ...oldValues, details: null };
          });
        }
      }
    });
  }, [setContext, stateContext.token]);

  useEffect(() => {
    // fetch only when user details are not present
    console.log(stateContext);
    console.log('fetching..');
    if (!stateContext.details) {
      fetchUserDetails();
    }
  }, [stateContext.details, fetchUserDetails]);

  // const refetchHandler = () => {
  //   // set details to undefined so that spinner will be displayed and
  //   // fetchUserDetails will be invoked from useEffect
  //   setContext((oldValues) => {
  //     return { ...oldValues, details: undefined };
  //   });
  // };

  // const logoutHandler = () => {
  //   fetch("http://localhost:8081/users/logout", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${stateContext.token}`,
  //     },
  //   }).then(async (response) => {
  //     setContext((oldValues) => {
  //       return { ...oldValues, details: undefined, token: null };
  //     });
  //     window.localStorage.setItem("logout", Date.now());
  //   });
  // };

  return stateContext.details === null ? (
    "Error Loading User details"
  ) : !stateContext.details ? (
    < Loader/>
  ) : (

        <div >
          {/* <Button text="Refetch" intent="primary" onClick={refetchHandler} /> */}
          <Navbar/>
          {/* <button
            onClick={logoutHandler}>
              LOGOUT
          </button> */}
        </div>

  );
};

export default Fabric;  