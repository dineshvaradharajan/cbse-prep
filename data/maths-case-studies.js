const MATHS_CASE_STUDIES = {
  "ch1": [
    {
      "passage": "A group of 5 students — Aman, Bina, Charu, Deepak, and Esha — are part of an online study forum. The forum automatically tracks connections: if a student sends a message to another, a directed link is created. The platform defines a relation R on the set S = {Aman, Bina, Charu, Deepak, Esha} such that (x, y) belongs to R if 'x has sent at least one message to y'. After one month, the records show: every student has messaged themselves (via saved notes), if Aman messaged Bina then Bina also messaged Aman (and similarly for every pair), and if Aman messaged Bina and Bina messaged Charu, then Aman has also messaged Charu (and similarly for every such chain). The platform also defines a function f from S to the set of membership levels {Silver, Gold, Platinum} based on the number of distinct people each student contacted.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "Since every student has messaged themselves, the relation R is:",
          "options": [
            "Symmetric",
            "Transitive",
            "Reflexive",
            "Neither reflexive nor symmetric"
          ],
          "answer": 2
        },
        {
          "qno": 2,
          "question": "The relation R, as described above, is:",
          "options": [
            "Only reflexive",
            "Only symmetric",
            "Reflexive and symmetric but not transitive",
            "An equivalence relation"
          ],
          "answer": 3
        },
        {
          "qno": 3,
          "question": "If the function f assigns membership levels such that f(Aman) = Gold, f(Bina) = Gold, f(Charu) = Platinum, f(Deepak) = Silver, and f(Esha) = Platinum, then f is:",
          "options": [
            "One-one and onto",
            "One-one but not onto",
            "Onto but not one-one",
            "Neither one-one nor onto"
          ],
          "answer": 2
        },
        {
          "qno": 4,
          "question": "How many equivalence relations are possible on a set containing exactly 2 elements?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "If a relation on S is both symmetric and transitive but not reflexive, which of the following is true?",
          "options": [
            "It must be an equivalence relation",
            "It cannot be an equivalence relation",
            "It is always an empty relation",
            "It must be a universal relation"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "ch3": [
    {
      "passage": "A retail company 'MegaMart' operates 2 stores — Store A and Store B. Each store sells 3 categories of products: Electronics, Clothing, and Groceries. The monthly sales (in lakhs of rupees) for January are represented by a 2x3 matrix P, where rows represent stores and columns represent product categories. The sales data is P = [[5, 8, 12], [7, 6, 10]]. In February, sales changed and are given by Q = [[6, 9, 11], [8, 7, 12]]. The management wants to analyse total sales, differences, and projections using matrix operations. The company also tracks a cost matrix C (3x1) representing the cost price per unit category as C = [[0.6], [0.5], [0.7]], where values are in lakhs.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "The order of the matrix P + Q is:",
          "options": [
            "3 x 2",
            "2 x 2",
            "2 x 3",
            "3 x 3"
          ],
          "answer": 2
        },
        {
          "qno": 2,
          "question": "The element in the 2nd row and 3rd column of the matrix (P + Q) is:",
          "options": [
            "22",
            "23",
            "21",
            "20"
          ],
          "answer": 0
        },
        {
          "qno": 3,
          "question": "What is the order of the product matrix P times C?",
          "options": [
            "2 x 3",
            "3 x 1",
            "2 x 1",
            "3 x 3"
          ],
          "answer": 2
        },
        {
          "qno": 4,
          "question": "The transpose of matrix P has order:",
          "options": [
            "2 x 3",
            "3 x 3",
            "3 x 2",
            "2 x 2"
          ],
          "answer": 2
        },
        {
          "qno": 5,
          "question": "If the management projects March sales as 2P - Q, what is the value of the element in the 1st row and 2nd column of this matrix?",
          "options": [
            "8",
            "7",
            "9",
            "6"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "ch4": [
    {
      "passage": "A government surveyor is mapping three triangular plots of land in a village. The vertices of Plot 1 are given by the coordinates A(1, 2), B(4, 6), and C(7, 10). The vertices of Plot 2 are P(2, 1), Q(5, 7), and R(1, 3). The surveyor uses the determinant method to calculate the area of these triangular plots. For a third plot, the vertices are determined by solving a system of linear equations: 2x + 3y = 12 and x + y = 5. The surveyor needs to verify whether certain points are collinear and compute areas accurately to file the land records.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "The area of the triangle formed by points A(1, 2), B(4, 6), C(7, 10) using the determinant formula is:",
          "options": [
            "10 sq. units",
            "5 sq. units",
            "0 sq. units",
            "15 sq. units"
          ],
          "answer": 2
        },
        {
          "qno": 2,
          "question": "Since the area of triangle ABC is zero, the points A, B, and C are:",
          "options": [
            "Forming a right triangle",
            "Forming an equilateral triangle",
            "Collinear",
            "Forming an isosceles triangle"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "The area of the triangle formed by points P(2, 1), Q(5, 7), R(1, 3) is:",
          "options": [
            "3 sq. units",
            "4.5 sq. units",
            "6 sq. units",
            "1.5 sq. units"
          ],
          "answer": 2
        },
        {
          "qno": 4,
          "question": "Using Cramer's rule for the system 2x + 3y = 12 and x + y = 5, the value of x is:",
          "options": [
            "2",
            "3",
            "4",
            "1"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "For the same system of equations, the value of y is:",
          "options": [
            "3",
            "2",
            "1",
            "4"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "ch5": [
    {
      "passage": "A municipal water department is studying the water level in a large overhead tank that supplies a residential colony. The water level h (in metres) in the tank at time t (in hours) is modelled by the function: h(t) = { 2t + 1, for 0 <= t <= 3 ; t^2 - 2t + 4, for 3 < t <= 6 }. The department needs to understand how the water level changes over time to plan pump operations. The rate of change of water level determines when additional pumps should be activated. Engineers also need to check whether the water level function is smooth enough (continuous and differentiable) at the transition point t = 3, where the pumping mode changes from linear to nonlinear filling.",
      "source": "CBSE Sample 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the value of h(t) from the left-hand side as t approaches 3?",
          "options": [
            "6",
            "7",
            "8",
            "5"
          ],
          "answer": 1
        },
        {
          "qno": 2,
          "question": "What is the value of h(t) from the right-hand side as t approaches 3?",
          "options": [
            "6",
            "8",
            "7",
            "5"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "Is h(t) continuous at t = 3?",
          "options": [
            "Yes, both left and right limits equal h(3) = 7",
            "No, left limit is 7 but right limit is 6",
            "No, left limit is 6 but right limit is 7",
            "Yes, but only from the left side"
          ],
          "answer": 0
        },
        {
          "qno": 4,
          "question": "What is the derivative of h(t) for 3 < t <= 6?",
          "options": [
            "2t + 2",
            "2t - 2",
            "t^2 - 2",
            "2t"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "Is h(t) differentiable at t = 3?",
          "options": [
            "Yes, both left and right derivatives are equal to 2",
            "Yes, both left and right derivatives are equal to 4",
            "No, left derivative is 2 and right derivative is 4",
            "No, left derivative is 4 and right derivative is 2"
          ],
          "answer": 2
        }
      ]
    },
    {
      "passage": "A biologist is studying a bacterial culture in a laboratory. The population P (in thousands) of bacteria after t hours is modelled by the function P(t) = 5 * e^(0.3t). The biologist needs to determine how fast the population is growing at various time points to decide when to administer an antibiotic. The rate of growth is crucial for understanding the infection dynamics. The experiment runs for 10 hours and the biologist records data at regular intervals. She also considers an alternative model Q(t) = 5 * ln(2t + 1) for a slower-growing strain of bacteria in a separate dish.",
      "source": "CBSE Sample 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the derivative of P(t) = 5 * e^(0.3t) with respect to t?",
          "options": [
            "5 * e^(0.3t)",
            "0.3 * e^(0.3t)",
            "1.5 * e^(0.3t)",
            "15 * e^(0.3t)"
          ],
          "answer": 2
        },
        {
          "qno": 2,
          "question": "What is the initial population of the bacteria at t = 0?",
          "options": [
            "0 thousand",
            "5 thousand",
            "1.5 thousand",
            "10 thousand"
          ],
          "answer": 1
        },
        {
          "qno": 3,
          "question": "What is the rate of growth of population at t = 0?",
          "options": [
            "5 thousand per hour",
            "0.3 thousand per hour",
            "1.5 thousand per hour",
            "15 thousand per hour"
          ],
          "answer": 2
        },
        {
          "qno": 4,
          "question": "What is the derivative of Q(t) = 5 * ln(2t + 1) with respect to t?",
          "options": [
            "5 / (2t + 1)",
            "10 / (2t + 1)",
            "5 / t",
            "10 / t"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the second derivative of P(t) = 5 * e^(0.3t)?",
          "options": [
            "0.45 * e^(0.3t)",
            "0.09 * e^(0.3t)",
            "1.5 * e^(0.3t)",
            "0.3 * e^(0.3t)"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "ch6": [
    {
      "passage": "A packaging company manufactures open-top rectangular boxes from square sheets of cardboard. Each cardboard sheet has a side length of 24 cm. To form the box, equal squares of side x cm are cut from each corner, and the flaps are folded up. The company wants to determine the value of x that will maximise the volume of the box so that it can hold the maximum amount of product. The cost of cardboard is Rs 2 per sq cm, and the company also wants to minimise wastage. The production manager needs to find the optimal dimensions for both maximum volume and minimum material cost.",
      "source": "CBSE 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the volume V of the box in terms of x?",
          "options": [
            "V = x(24 - x)^2",
            "V = x(24 - 2x)^2",
            "V = x^2(24 - 2x)",
            "V = 2x(24 - x)^2"
          ],
          "answer": 1
        },
        {
          "qno": 2,
          "question": "What is dV/dx?",
          "options": [
            "(24 - 2x)^2 + x * 2(24 - 2x)(-2)",
            "(24 - 2x)^2 - 4x(24 - 2x)",
            "Both (a) and (b)",
            "12(24 - 2x)"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "For what value of x is the volume maximum?",
          "options": [
            "x = 2",
            "x = 4",
            "x = 6",
            "x = 12"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "What is the maximum volume of the box?",
          "options": [
            "1024 cm^3",
            "2048 cm^3",
            "512 cm^3",
            "1536 cm^3"
          ],
          "answer": 0
        },
        {
          "qno": 5,
          "question": "What is the total area of cardboard wasted (the four corner squares cut out)?",
          "options": [
            "16 cm^2",
            "32 cm^2",
            "64 cm^2",
            "48 cm^2"
          ],
          "answer": 2
        }
      ]
    },
    {
      "passage": "During a school sports day, a student throws a ball vertically upward from the top of a building that is 20 metres tall. The height of the ball above the ground at time t seconds is given by H(t) = -5t^2 + 30t + 20. The physics teacher asks the students to analyse the motion of the ball using concepts of Application of Derivatives. The students need to find when the ball reaches its maximum height, the intervals during which the ball is rising or falling, and the velocity of the ball at different instants. The ball eventually hits the ground after some time.",
      "source": "CBSE Sample 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the velocity of the ball at time t, i.e., H'(t)?",
          "options": [
            "-10t + 30",
            "-5t + 30",
            "-10t + 20",
            "-5t^2 + 30"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "At what time does the ball reach its maximum height?",
          "options": [
            "t = 2 seconds",
            "t = 3 seconds",
            "t = 4 seconds",
            "t = 6 seconds"
          ],
          "answer": 1
        },
        {
          "qno": 3,
          "question": "What is the maximum height reached by the ball above the ground?",
          "options": [
            "45 metres",
            "55 metres",
            "65 metres",
            "75 metres"
          ],
          "answer": 2
        },
        {
          "qno": 4,
          "question": "In which time interval is the height function H(t) strictly increasing?",
          "options": [
            "(0, 2)",
            "(0, 3)",
            "(3, 6)",
            "(0, 6)"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the velocity of the ball at t = 1 second?",
          "options": [
            "10 m/s",
            "20 m/s",
            "25 m/s",
            "30 m/s"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "ch7": [
    {
      "passage": "In a physics experiment, a car starts from rest and moves along a straight road. The velocity v (in m/s) of the car at time t (in seconds) is given by v(t) = 3t^2 + 2t for 0 <= t <= 5. The physics teacher explains that the displacement of the car over a time interval can be found by evaluating the definite integral of the velocity function over that interval. The students are also told that the area under the velocity-time curve between two time values represents the total distance travelled. They are asked to compute the displacement over different intervals and verify properties of definite integrals using this real-world scenario.",
      "source": "CBSE 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the displacement of the car from t = 0 to t = 2 seconds? (i.e., the integral of v(t) from 0 to 2)",
          "options": [
            "8 m",
            "10 m",
            "12 m",
            "14 m"
          ],
          "answer": 2
        },
        {
          "qno": 2,
          "question": "What is the antiderivative (indefinite integral) of v(t) = 3t^2 + 2t?",
          "options": [
            "t^3 + t^2 + C",
            "6t + 2 + C",
            "t^3 + 2t^2 + C",
            "3t^3 + t^2 + C"
          ],
          "answer": 0
        },
        {
          "qno": 3,
          "question": "What is the displacement from t = 0 to t = 5 seconds?",
          "options": [
            "125 m",
            "150 m",
            "175 m",
            "200 m"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "Using the property of definite integrals, what is the value of integral from 0 to 2 of v(t)dt + integral from 2 to 5 of v(t)dt?",
          "options": [
            "138 m",
            "150 m",
            "162 m",
            "175 m"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the acceleration of the car at t = 3 seconds? (Hint: acceleration is the derivative of velocity)",
          "options": [
            "18 m/s^2",
            "20 m/s^2",
            "22 m/s^2",
            "24 m/s^2"
          ],
          "answer": 1
        }
      ]
    },
    {
      "passage": "An economist is studying the production cost of a small factory that manufactures handmade candles. The marginal cost (the cost of producing one additional unit) when x units have been produced is given by MC(x) = 3x^2 - 14x + 15, where MC is in rupees. It is known that the fixed cost of production (when no units are produced) is Rs 120. The total cost function C(x) can be obtained by integrating the marginal cost function. The economist wants to determine the total cost of producing various quantities to advise the factory owner on pricing and profitability.",
      "source": "CBSE Sample 2024",
      "questions": [
        {
          "qno": 1,
          "question": "What is the total cost function C(x)?",
          "options": [
            "x^3 - 7x^2 + 15x + 120",
            "3x^3 - 7x^2 + 15x + 120",
            "x^3 - 14x^2 + 15x + 120",
            "x^3 - 7x^2 + 15x"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "What is the total cost of producing 5 units?",
          "options": [
            "Rs 145",
            "Rs 170",
            "Rs 120",
            "Rs 95"
          ],
          "answer": 0
        },
        {
          "qno": 3,
          "question": "What is the marginal cost when 3 units have been produced?",
          "options": [
            "Rs 0",
            "Rs 6",
            "Rs 12",
            "Rs 15"
          ],
          "answer": 0
        },
        {
          "qno": 4,
          "question": "For what value of x is the marginal cost minimum?",
          "options": [
            "x = 7/3",
            "x = 5",
            "x = 3",
            "x = 14/3"
          ],
          "answer": 0
        },
        {
          "qno": 5,
          "question": "What is the cost of producing the 4th unit (i.e., cost of increasing production from 3 to 4 units)?",
          "options": [
            "Rs 3",
            "Rs 7",
            "Rs 11",
            "Rs 5"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "ch8": [
    {
      "passage": "A landscape architect is designing a decorative garden for a public park. The garden is bounded by two curves: the upper boundary follows the parabola y = 6x - x^2 and the lower boundary follows the straight line y = x. The region enclosed between these two curves is to be planted with flower beds. The architect needs to calculate the total area of the garden to estimate the amount of soil, seeds, and fertiliser required. The gardening team also needs to know the points where the boundary curves meet so that they can lay out the borders accurately on the ground.",
      "source": "CBSE 2024",
      "questions": [
        {
          "qno": 1,
          "question": "At what points do the curves y = 6x - x^2 and y = x intersect?",
          "options": [
            "(0, 0) and (5, 5)",
            "(0, 0) and (6, 6)",
            "(1, 1) and (5, 5)",
            "(0, 0) and (4, 4)"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "Which curve is above the other in the interval (0, 5)?",
          "options": [
            "y = x is above y = 6x - x^2",
            "y = 6x - x^2 is above y = x",
            "They coincide throughout",
            "It alternates between the two"
          ],
          "answer": 1
        },
        {
          "qno": 3,
          "question": "What is the integrand for calculating the area between the two curves?",
          "options": [
            "(6x - x^2) - x = 5x - x^2",
            "x - (6x - x^2) = x^2 - 5x",
            "(6x - x^2) + x = 7x - x^2",
            "x^2 - 6x + x = x^2 - 5x"
          ],
          "answer": 0
        },
        {
          "qno": 4,
          "question": "What is the area enclosed between the two curves?",
          "options": [
            "125/3 sq units",
            "125/6 sq units",
            "25/3 sq units",
            "25/6 sq units"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the maximum vertical distance between the two curves, and at what value of x does it occur?",
          "options": [
            "6.25 units at x = 2.5",
            "5 units at x = 3",
            "4 units at x = 2",
            "9 units at x = 3"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "ch9": [
    {
      "passage": "In a microbiology laboratory, a researcher is studying the growth of a bacterial colony in a nutrient-rich medium. At time t = 0 hours, the colony has 1000 bacteria. The researcher observes that the rate of growth of the bacterial population is proportional to the number of bacteria present at that instant. After 2 hours, the population doubles to 2000. Let P(t) denote the number of bacteria at time t hours. The researcher wants to model this growth using differential equations to predict future population sizes and plan resource allocation for the experiment.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "Which of the following differential equations correctly models the bacterial growth described above?",
          "options": [
            "dP/dt = kP, where k is a positive constant",
            "dP/dt = kP^2, where k is a positive constant",
            "d^2P/dt^2 = kP, where k is a positive constant",
            "dP/dt = k/P, where k is a positive constant"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "What is the order and degree of the differential equation formed in this problem?",
          "options": [
            "Order 2, Degree 1",
            "Order 1, Degree 2",
            "Order 1, Degree 1",
            "Order 2, Degree 2"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "The general solution of the differential equation dP/dt = kP is:",
          "options": [
            "P = ke^t + C",
            "P = Ce^(kt)",
            "P = Ct + k",
            "P = C/(1 + e^(-kt))"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "Using the initial conditions P(0) = 1000 and P(2) = 2000, the value of k (growth constant) is:",
          "options": [
            "ln 2",
            "2 ln 2",
            "(ln 2)/2",
            "1/ln 2"
          ],
          "answer": 2
        },
        {
          "qno": 5,
          "question": "Using the particular solution obtained, what will be the bacterial population after 6 hours?",
          "options": [
            "4000",
            "6000",
            "8000",
            "16000"
          ],
          "answer": 2
        }
      ]
    }
  ],
  "ch10": [
    {
      "passage": "A delivery drone operates in a 3D coordinate system where distances are measured in metres. The drone starts from a warehouse located at point A(1, 2, 3) and must deliver a package to point B(4, 6, 3). After delivery, it flies to a charging station at point C(2, 3, 5). The drone's navigation system uses vector algebra to compute flight paths, angles of approach, and coverage areas. The pilot monitoring the drone needs to analyse the vectors AB and AC for optimal route planning.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "The position vector of point B with respect to point A (i.e., vector AB) is:",
          "options": [
            "3i + 4j + 0k",
            "5i + 8j + 6k",
            "4i + 6j + 3k",
            "-3i - 4j + 0k"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "The magnitude of vector AC is:",
          "options": [
            "sqrt(6)",
            "sqrt(5)",
            "sqrt(14)",
            "3"
          ],
          "answer": 0
        },
        {
          "qno": 3,
          "question": "The dot product of vectors AB and AC is:",
          "options": [
            "5",
            "7",
            "9",
            "11"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "The unit vector along AB is:",
          "options": [
            "(3i + 4j) / 7",
            "(3i + 4j) / 5",
            "(3i + 4j) / 25",
            "(i + 2j + 3k) / sqrt(14)"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "The area of triangle ABC formed by the three points is:",
          "options": [
            "sqrt(101) / 2",
            "sqrt(125) / 2",
            "sqrt(75) / 2",
            "sqrt(100) / 2"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "ch11": [
    {
      "passage": "An architect is designing a modern exhibition hall where two laser beams are used for a light show. In the 3D coordinate system of the hall (in metres), the first laser beam L1 passes through the point A(1, 2, 3) and has direction ratios (2, 3, 6). The second laser beam L2 passes through the point B(2, 1, 4) and has direction ratios (1, 2, 2). The architect needs to ensure the beams do not intersect inside the hall and wants to calculate the shortest distance between them to install safety barriers. The beams are modelled as straight lines extending infinitely in both directions.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "The direction cosines of the first laser beam L1 are:",
          "options": [
            "2/7, 3/7, 6/7",
            "2/9, 3/9, 6/9",
            "1/3, 1/3, 1/3",
            "2/5, 3/5, 6/5"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "The equation of laser beam L1 in Cartesian form is:",
          "options": [
            "(x-1)/2 = (y-2)/3 = (z-3)/6",
            "(x-2)/1 = (y-3)/2 = (z-6)/3",
            "(x-2)/1 = (y-1)/2 = (z-4)/2",
            "(x+1)/2 = (y+2)/3 = (z+3)/6"
          ],
          "answer": 0
        },
        {
          "qno": 3,
          "question": "The cosine of the angle between the two laser beams L1 and L2 is:",
          "options": [
            "10/21",
            "20/21",
            "14/21",
            "12/21"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "The cross product of the direction vectors of L1 and L2 is:",
          "options": [
            "-6i + 2j + k",
            "6i - 2j + k",
            "6i + 2j - k",
            "-6i + 2j - k"
          ],
          "answer": 0
        },
        {
          "qno": 5,
          "question": "The shortest distance between the two laser beams L1 and L2 is:",
          "options": [
            "3/sqrt(41)",
            "5/sqrt(41)",
            "7/sqrt(41)",
            "1/sqrt(41)"
          ],
          "answer": 2
        }
      ]
    }
  ],
  "ch12": [
    {
      "passage": "A bakery produces two types of products: chocolate cakes and vanilla pastries. Each chocolate cake requires 2 kg of flour and 1 kg of sugar. Each vanilla pastry requires 1 kg of flour and 1 kg of sugar. The bakery has 40 kg of flour and 30 kg of sugar available per day. The profit on each chocolate cake is Rs 300 and on each vanilla pastry is Rs 200. The bakery owner wants to determine how many of each product to make daily to maximise profit.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "If x represents the number of chocolate cakes and y represents the number of vanilla pastries, the objective function to maximise profit Z is:",
          "options": [
            "Z = 200x + 300y",
            "Z = 300x + 200y",
            "Z = 2x + y",
            "Z = 300x + 200y + 40"
          ],
          "answer": 1
        },
        {
          "qno": 2,
          "question": "Which of the following is the correct flour constraint?",
          "options": [
            "x + 2y <= 40",
            "2x + y <= 40",
            "2x + 2y <= 40",
            "x + y <= 40"
          ],
          "answer": 1
        },
        {
          "qno": 3,
          "question": "Which of the following points is NOT in the feasible region?",
          "options": [
            "(0, 0)",
            "(10, 15)",
            "(20, 0)",
            "(15, 20)"
          ],
          "answer": 3
        },
        {
          "qno": 4,
          "question": "The corner points of the feasible region are (0, 0), (20, 0), (10, 20), and (0, 30). At which corner point is the profit maximised?",
          "options": [
            "(20, 0)",
            "(10, 20)",
            "(0, 30)",
            "(0, 0)"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the maximum profit per day?",
          "options": [
            "Rs 6000",
            "Rs 7000",
            "Rs 5000",
            "Rs 8000"
          ],
          "answer": 1
        }
      ]
    },
    {
      "passage": "A farmer has 200 hectares of land available to grow wheat and rice. Wheat requires 3 workers per hectare and rice requires 2 workers per hectare. The farmer can hire at most 500 workers. Additionally, the government mandates that at least 40 hectares must be used for rice cultivation to ensure food security. The profit per hectare on wheat is Rs 5000 and on rice is Rs 4000. The farmer wants to allocate land between the two crops to maximise total profit.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "If x hectares are used for wheat and y hectares for rice, which system of constraints correctly represents the problem?",
          "options": [
            "x + y <= 200, 3x + 2y <= 500, y >= 40, x >= 0",
            "x + y <= 200, 2x + 3y <= 500, y >= 40, x >= 0",
            "x + y >= 200, 3x + 2y <= 500, y >= 40, x >= 0",
            "x + y <= 200, 3x + 2y >= 500, y >= 40, x >= 0"
          ],
          "answer": 0
        },
        {
          "qno": 2,
          "question": "The objective function for this problem is:",
          "options": [
            "Minimise Z = 5000x + 4000y",
            "Maximise Z = 3x + 2y",
            "Maximise Z = 5000x + 4000y",
            "Maximise Z = 4000x + 5000y"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "The corner points of the feasible region are (0, 200), (0, 40), (100, 100), and (140, 40). The value of Z at (100, 100) is:",
          "options": [
            "Rs 8,00,000",
            "Rs 9,00,000",
            "Rs 10,00,000",
            "Rs 7,60,000"
          ],
          "answer": 1
        },
        {
          "qno": 4,
          "question": "At which corner point is the profit maximised?",
          "options": [
            "(0, 200)",
            "(100, 100)",
            "(140, 40)",
            "(0, 40)"
          ],
          "answer": 1
        },
        {
          "qno": 5,
          "question": "What is the maximum profit the farmer can earn?",
          "options": [
            "Rs 8,60,000",
            "Rs 8,00,000",
            "Rs 9,00,000",
            "Rs 7,00,000"
          ],
          "answer": 2
        }
      ]
    }
  ],
  "ch13": [
    {
      "passage": "A hospital uses a diagnostic test to detect a rare disease that affects 1% of the population. The test has a sensitivity (true positive rate) of 95%, meaning it correctly identifies 95% of people who actually have the disease. The test has a specificity (true negative rate) of 90%, meaning it correctly identifies 90% of people who do not have the disease. A patient visits the hospital and tests positive. The doctors need to evaluate the reliability of the test result using probability theory before recommending expensive treatment.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "Let D denote the event that a person has the disease and T denote the event that the test is positive. What is P(T|D)?",
          "options": [
            "0.90",
            "0.95",
            "0.01",
            "0.10"
          ],
          "answer": 1
        },
        {
          "qno": 2,
          "question": "What is the probability of a false positive, i.e., P(T|D'), where D' means the person does not have the disease?",
          "options": [
            "0.95",
            "0.05",
            "0.10",
            "0.01"
          ],
          "answer": 2
        },
        {
          "qno": 3,
          "question": "Using the law of total probability, P(T) — the probability that a randomly selected person tests positive — is:",
          "options": [
            "0.1085",
            "0.0585",
            "0.1490",
            "0.9500"
          ],
          "answer": 0
        },
        {
          "qno": 4,
          "question": "Using Bayes' theorem, the probability that the patient actually has the disease given that the test is positive, P(D|T), is approximately:",
          "options": [
            "0.95",
            "0.161",
            "0.088",
            "0.50"
          ],
          "answer": 2
        },
        {
          "qno": 5,
          "question": "If two independent tests are conducted on the same patient and both are positive, what is the probability that both tests are positive given the patient does NOT have the disease?",
          "options": [
            "0.01",
            "0.10",
            "0.001",
            "0.20"
          ],
          "answer": 0
        }
      ]
    },
    {
      "passage": "A smartphone factory has three production lines: Machine A, Machine B, and Machine C. Machine A produces 30% of the total output, Machine B produces 45%, and Machine C produces 25%. The defect rates are 2% for Machine A, 3% for Machine B, and 5% for Machine C. A quality inspector randomly picks a phone from the day's production for testing. The factory management uses probability analysis to identify which machine needs maintenance and to estimate overall quality metrics.",
      "source": "Practice",
      "questions": [
        {
          "qno": 1,
          "question": "What is the total probability that a randomly selected phone is defective?",
          "options": [
            "0.0260",
            "0.0320",
            "0.0335",
            "0.0400"
          ],
          "answer": 1
        },
        {
          "qno": 2,
          "question": "If a randomly selected phone is found defective, the probability that it was produced by Machine B is (approximately):",
          "options": [
            "0.1875",
            "0.4219",
            "0.3906",
            "0.500"
          ],
          "answer": 1
        },
        {
          "qno": 3,
          "question": "If 4 phones are randomly selected from Machine C's output, what is the probability that exactly one is defective? (Use binomial distribution)",
          "options": [
            "4 * (0.05) * (0.95)^3",
            "4 * (0.05)^3 * (0.95)",
            "(0.05)^4",
            "(0.95)^4"
          ],
          "answer": 0
        },
        {
          "qno": 4,
          "question": "If 3 phones are selected randomly from the entire production (independently), what is the probability that none of them is defective?",
          "options": [
            "(0.968)^3",
            "(0.97)^3",
            "(0.95)^3",
            "(0.98)^3"
          ],
          "answer": 0
        },
        {
          "qno": 5,
          "question": "Events 'phone is from Machine A' and 'phone is defective' are:",
          "options": [
            "Mutually exclusive events",
            "Independent events",
            "Neither mutually exclusive nor independent",
            "Both mutually exclusive and independent"
          ],
          "answer": 2
        }
      ]
    }
  ]
};

const CASE_STUDY_CHAPTER_NAMES = {
  "ch1": "Relations and Functions",
  "ch2": "Inverse Trigonometric Functions",
  "ch3": "Matrices",
  "ch4": "Determinants",
  "ch5": "Continuity and Differentiability",
  "ch6": "Application of Derivatives",
  "ch7": "Integrals",
  "ch8": "Application of Integrals",
  "ch9": "Differential Equations",
  "ch10": "Vector Algebra",
  "ch11": "Three Dimensional Geometry",
  "ch12": "Linear Programming",
  "ch13": "Probability"
};
