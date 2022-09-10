import { useState } from "react";
import logo from "../images/logo1.png";
import prof from "../images/chef.jpg";
import soup from "../images/soup.png";
import tuna from "../images/tuna.png";
import img from "../images/img1.png";
import masala from "../images/masala-tafu.png";
import fruit from "../images/fruit.png";
import end from "../images/end.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Siderbar from "./Siderbar";
import swal from "sweetalert";

export default function HomePage() {

  const buttonPremium = (event) => {
    swal(
      "Premium",
      "Premium Activated",
      "success" 
    );
    
  };



  const colors = {
    orange: "#DB3529",
    grey: "#FFBABA",
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "20px",
      marginTop: "20px",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
      margin: "0px 0px 100px",
    },
  };

  const stars = Array(5).fill(0);
  const location = useLocation();
  return (
    <div className="container">
      <Siderbar/>
      <div className="content-area">
        <div className="widget-head">
          <div className="row">
            <div className="col-md-4">
              <div className="input-group">
                <i className="fas fa-search fa-sm"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your search request..."
                />
              </div>
            </div>
            <div className="col-md-6 text-end my-2">
              <i class="fas fa-sliders-h"></i>
            </div>
            <div className="col-md-2 text-start">
              <button className="btn btn-danger" onClick={buttonPremium}>Go to Premium</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mt-4 ml-2 ">
              <div className="main-img">
                <img src={img} height="140px" />
              </div>
            </div>
            <div className="col-md-6 mt-4 head">
              <label>
                <h2>Only the best recipes!</h2>
              </label>
              <br></br>
              <label>
                <h6>Today's new recipes for you</h6>
              </label>
            </div>

            <div className="col-md-1 mt-4 ">
              <label className="count-head">168</label>
              <br></br>
              <h6 className="count-sub">Tutorials</h6>
            </div>
            <div className="col-md-1 mt-4 line"></div>
            <div className="col-md-2 mt-4 ">
              <label className="count-head2">304</label>
              <br></br>
              <h6 className="count2-sub">Recipes</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-3">
              <div className="bg-white item-container">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={soup} />
                  {/* <img src={soup} height="135px" className="img" /> */}
                </div>
                <label>Noodle chicken soup</label>
                <div className="course-styl">
                  <label>Intermediate</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Kcal</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-drumstick-bite"></i>
                      </label>
                      <h6>Meat</h6>
                    </div>
                  </div>
                </div>
                <div style={styles.container}>
                  <div style={styles.stars} className="ml-2">
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={16}
                          color={4 > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="strt-btn">
                  <Link to="/inner_page">
                    {" "}
                    <button className="btn-align">
                      <strong>Start cooking</strong>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="bg-white item-container">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={tuna} />
                  {/* <img src={tuna} height="135px" className="img" /> */}
                </div>
                <label>Salad with raw tuna</label>
                <div className="course-styl-adv">
                  <label>Advanced</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-fish"></i>
                      </label>
                      <h6>Meat</h6>
                    </div>
                  </div>
                </div>

                <div style={styles.container}>
                  <div style={styles.stars} className="ml-2">
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={16}
                          color={5 > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="strt-btn">
                  <Link to="/inner_page">
                    <button className="btn-align">
                      <strong>Start cooking</strong>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="bg-white item-container">
                <div className=" item-image">
                  <img alt="" className="img1 rounded-circle" src={soup} />
                </div>
                <label>Pasta with spinach</label>
                <div className="course-styl-begnr">
                  <label>Beginner</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-leaf"></i>
                      </label>
                      <h6>Meat</h6>
                    </div>
                  </div>

                  <div style={styles.container}>
                    <div style={styles.stars} className="ml-2">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            color={3 > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="strt-btn">
                    <Link to="/inner_page">
                      <button className="btn-align">
                        <strong>Start cooking</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="item-bg-container ">
                <div className="btn-pro">
                  <button className="btn-pro-dark text-white">
                    <strong>PRO</strong>
                  </button>
                </div>
                <div>
                  <label>Mentorship</label>
                  <br></br>
                  <span>program</span>
                  <br></br>
                  <p>
                    A mentor will track your progress and give you tips for
                    faster cultinary growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row next">
            <div className="col-md-3">
              <div className="bg-white item-container">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={soup} />
                  {/* <img src={soup} height="135px" className="img" /> */}
                </div>
                <label className="ml-sm">Cucumber Salad</label>
                <div className="course-styl-adv">
                  <label>Advanced</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>95</label>
                      <h6>Kcal</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-leaf"></i>
                      </label>
                      <h6>Veg</h6>
                    </div>
                  </div>

                  <div style={styles.container}>
                    <div style={styles.stars} className="ml-2">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            color={4 > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="strt-btn">
                    <Link to="/inner_page">
                      <button className="btn-align">
                        <strong>Start cooking</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-white item-container">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={masala} />
                  {/* <img src={masala} height="135px" className="img" /> */}
                </div>
                <label className="ml">Masala tafu</label>
                <div className="course-styl-begnr">
                  <label>Beginner</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>95</label>
                      <h6>Kcal</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-leaf"></i>
                      </label>
                      <h6>Veg</h6>
                    </div>
                  </div>

                  <div style={styles.container}>
                    <div style={styles.stars} className="ml-2">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            color={4 > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="strt-btn">
                    <Link to="/inner_page">
                      <button className="btn-align">
                        <strong>Start cooking</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-white item-container">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={soup} />
                  {/* <img src={soup} height="135px" className="img" /> */}
                </div>
                <label className="ml-sm">Pork medallions</label>
                <div className="course-styl-adv">
                  <label>Advanced</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>95</label>
                      <h6>Kcal</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-leaf"></i>
                      </label>
                      <h6>Veg</h6>
                    </div>
                  </div>

                  <div style={styles.container}>
                    <div style={styles.stars} className="ml-2">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            color={4 > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="strt-btn">
                    <Link to="/inner_page">
                      <button className="btn-align">
                        <strong>Start cooking</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white item-container ">
                <div className=" bg-white item-image">
                  <img alt="" className="img1 rounded-circle" src={fruit} />
                  {/* <img src={fruit} height="135px" className="img" /> */}
                </div>
                <label className="ml">Fruit bowl</label>
                <div className="course-styl">
                  <label>Intermediate</label>
                </div>
                <div className="row">
                  <div className="col-2">
                    <div className="course-count1">
                      <label>25</label>
                      <h6>Min</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>95</label>
                      <h6>Kcal</h6>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="new-line1"></div>
                  </div>
                  <div className="col-2">
                    <div className="course-count1">
                      <label>
                        <i class="fas fa-apple-alt"></i>
                      </label>
                      <h6>Fruit</h6>
                    </div>
                  </div>

                  <div style={styles.container}>
                    <div style={styles.stars} className="ml-2">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={16}
                            color={4 > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="strt-btn">
                    <Link to="/inner_page">
                      <button className="btn-align">
                        <strong>Start cooking</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
