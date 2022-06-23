module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ServiceCard.tsx":
/*!************************************!*\
  !*** ./components/ServiceCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Cesar\\Desktop\\port\\Dev-Portfolio-Next-X\\components\\ServiceCard.tsx";

// import { motion } from 'framer-motion'
const ServiceCard = ({
  service: {
    Icon,
    title,
    about
  }
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about
    };
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center p-2 space-x-4 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
      className: "w-12 h-12 text-green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "font-bold",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        dangerouslySetInnerHTML: createMarkup()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: services, languages, tools, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);





const services = [{
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__["RiComputerLine"],
  title: "Frontend Development",
  about: "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> "
}, {
  Icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaServer"],
  title: "Backend  Development",
  about: "handle database, server, api using <b>Express </b> & other popular frameworks"
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineApi"],
  title: "API Development",
  about: "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> "
}, {
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDeveloperMode"],
  title: "Competitive Coder",
  about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> "
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineAntDesign"],
  title: "UI/UX designer",
  about: "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> "
}, {
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__["RiComputerLine"],
  title: "Whatever",
  about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
}];
const languages = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Python",
  level: "45"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Java Script",
  level: "60"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "React Native",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "React",
  level: "70"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Django",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Bootstrap",
  level: "80"
}];
const tools = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Figma",
  level: "85"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Photoshop",
  level: "45"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Illustrator",
  level: "60"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Framer",
  level: "45"
}];
const projects = [{
  name: "COVID Tracker",
  description: "This app shows a statistical view about corona virus over the world",
  image_path: "/images/covid.jpg",
  deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  category: ["react"],
  key_techs: ["React", "Chart.js", "Material UI"]
}, {
  name: "Algorithm Visualizer",
  image_path: "/images/algoVisual.png",
  deployed_url: "https://visual-algorithm.web.app/",
  github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  category: ["react"],
  description: "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
  key_techs: ["React", "firebase", "Framer Motion"]
}, {
  name: "Dev Talks",
  image_path: "/images/dev.jpg",
  deployed_url: "https://dev-talks.herokuapp.com/",
  github_url: "https://github.com/Dey-Sumit/Dev-talks",
  category: ["node", "mongo", "react"],
  description: "Social Media app for developers who can share project,create posts,etc...",
  key_techs: ["React", "Redux", "Node", "Express", "Mongo", "REST API", "Bootstrap"]
}, {
  name: "Realtime Chat App",
  image_path: "/images/chatapp.jpg",
  deployed_url: "https://sumit-chat.netlify.app/",
  github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  category: ["node", "react"],
  description: "Basic Realtime Chat App where one can create a room can talk to each other",
  key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"]
}, {
  name: "Tweeter Clone",
  image_path: "/images/tweetme.jpg",
  deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  github_url: "https://github.com/Dey-Sumit/tweetme",
  category: ["django", "react"],
  description: "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  key_techs: ["React", "Django", "Django REST API"]
}, {
  name: "Color Classification using tf.js",
  image_path: "/images/color.jpg",
  deployed_url: "!#",
  github_url: "https://github.com/Dey-Sumit/color-classification",
  category: ["express"],
  description: "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  key_techs: ["Express", "TensorFlow.js", "Vanilla js"]
}, {
  name: "YouTube using YouTube ",
  image_path: "/images/youtubeClone.png",
  deployed_url: "https://not-utube.web.app/",
  github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  category: ["express"],
  description: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  key_techs: ["React", "Redux", "Firebase Auth", "YouTube API", "Sass", "Bootstrap"]
}, {
  name: "Football App",
  image_path: "/images/football.png",
  deployed_url: "https://o-my-goal.web.app/",
  github_url: "https://github.com/Dey-Sumit/football-app",
  category: ["react"],
  description: "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"]
}];

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ServiceCard */ "./components/ServiceCard.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "C:\\Users\\Cesar\\Desktop\\port\\Dev-Portfolio-Next-X\\pages\\index.tsx";



const About = () => {
  // console.log(services);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col flex-grow px-6 pt-1 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      className: "my-3 text-base font-medium",
      children: "I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy of Technology. I have 3+ years of experience in Web Development and I have a Youtube Channel where I teach Full Stack Web Development"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 ",
      style: {
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "my-3 text-xl font-semibold tracking-wide",
        children: "What I am doing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid gap-6 my-3 md:grid-cols-2",
        children: _data__WEBPACK_IMPORTED_MODULE_2__["services"].map(service => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            service: service
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined)
        }, service.title, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
}; //!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }
//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48
// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);
//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }


/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwic2VydmljZXMiLCJSaUNvbXB1dGVyTGluZSIsIkZhU2VydmVyIiwiQWlPdXRsaW5lQXBpIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwibmFtZSIsImxldmVsIiwidG9vbHMiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImdpdGh1Yl91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyIsIkFib3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFD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O0FBQUksaUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVFFO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtCQUVHcEIsOENBQVEsQ0FBQ3FCLEdBQVQsQ0FBYzNCLE9BQUQsaUJBQ1o7QUFDRSxtQkFBUyxFQUFDLHVFQURaO0FBQUEsaUNBSUUscUVBQUMsK0RBQUQ7QUFBYSxtQkFBTyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsV0FFT0EsT0FBTyxDQUFDRSxLQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThCRCxDQWpDRCxDLENBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZXNCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDeEVBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdHlwZXMnXHJcbi8vIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZDogRnVuY3Rpb25Db21wb25lbnQ8eyBzZXJ2aWNlOiBTZXJ2aWNlIH0+ID0gKHtcclxuICAgc2VydmljZTogeyBJY29uLCB0aXRsZSwgYWJvdXQgfSxcclxufSkgPT4ge1xyXG4gICAvL1hTUyBhdHRhY2sgOiggb24gb3VyIHBvcnRmb2xpbyBidHcsIGFzIGFuIGFsdGVybmF0ZSB1c2UgbnBtIGkgZG9tIHB1cmlmeVxyXG4gICBmdW5jdGlvbiBjcmVhdGVNYXJrdXAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIF9faHRtbDogYWJvdXQsXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHAtMiBzcGFjZS14LTQgJz5cclxuICAgICAgICAgPEljb24gY2xhc3NOYW1lPSd3LTEyIGgtMTIgdGV4dC1ncmVlbicgLz5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3RpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoKX0gLz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkXHJcbiIsImltcG9ydCB7IFJpQ29tcHV0ZXJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEZhU2VydmVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFudERlc2lnbiwgQWlPdXRsaW5lQXBpIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kRGV2ZWxvcGVyTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdCwgU2VydmljZSwgU2tpbGwgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgQnNDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBidWlsZCBhIGJlYXV0aWZ1bCBhbmQgc2NhbGFibGUgU1BBIHVzaW5nIDxiPiBIVE1MPC9iPiw8Yj5DU1M8L2I+ICAgYW5kIDxiPlJlYWN0LmpzPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEZhU2VydmVyLFxyXG4gICAgdGl0bGU6IFwiQmFja2VuZCAgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcImhhbmRsZSBkYXRhYmFzZSwgc2VydmVyLCBhcGkgdXNpbmcgPGI+RXhwcmVzcyA8L2I+ICYgb3RoZXIgcG9wdWxhciBmcmFtZXdvcmtzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBcGksXHJcbiAgICB0aXRsZTogXCJBUEkgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGRldmVsb3Agcm9idXN0ICBSRVNUIEFQSSB1c2luZyA8Yj5kamFuZ28tcmVzdC1hcGk8L2I+ICAmIDxiPk5vZGUgQVBJPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IE1kRGV2ZWxvcGVyTW9kZSxcclxuICAgIHRpdGxlOiBcIkNvbXBldGl0aXZlIENvZGVyXCIsXHJcbiAgICBhYm91dDogXCJhIGRhaWx5IHByb2JsZW0gc29sdmVyIGluIDxiPkhhY2tlclJhbms8L2I+ICBhbmQgPGI+TGVldCBDb2RlPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIlVJL1VYIGRlc2lnbmVyXCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJzdHVubmluZyB1c2VyIGludGVyZmFjZSBkZXNpZ25lciB1c2luZyA8Yj5GaWdtYTwvYj4gIGFuZCAgPGI+RnJhbWVyPC9iPiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gICAgdGl0bGU6IFwiV2hhdGV2ZXJcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhpYyBxdWlzIG1pbmltYSBhdXRlbSFcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiSmF2YSBTY3JpcHRcIixcclxuICAgIGxldmVsOiBcIjYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIGxldmVsOiBcIjcwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkRqYW5nb1wiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiQm9vdHN0cmFwXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbHM6IFNraWxsW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJGaWdtYVwiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUGhvdG9zaG9wXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJJbGx1c3RyYXRvclwiLFxyXG4gICAgbGV2ZWw6IFwiNjBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiRnJhbWVyXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiQ09WSUQgVHJhY2tlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBhcHAgc2hvd3MgYSBzdGF0aXN0aWNhbCB2aWV3IGFib3V0IGNvcm9uYSB2aXJ1cyBvdmVyIHRoZSB3b3JsZFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvdmlkLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vY292aWQtMTktdHJhY2tlci1ieS1zdW1pdC53ZWIuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NvdmlkLTE5LXRyYWNrZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJDaGFydC5qc1wiLCBcIk1hdGVyaWFsIFVJXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbGdvcml0aG0gVmlzdWFsaXplclwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2FsZ29WaXN1YWwucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly92aXN1YWwtYWxnb3JpdGhtLndlYi5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvYWxnb3JpdGhtLXZpc3VhbGl6ZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIHdlYiBhcHAgd2hpY2ggc2hvd3MgaG93IGFuIGFsZ29yaXRobSAocGF0aCBmaW5kaW5nIG9yIHNvcnRpbmcpIHdvcmtzIHdpdGggY29vbCBhbmltYXRpb25cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJmaXJlYmFzZVwiLCBcIkZyYW1lciBNb3Rpb25cIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXYgVGFsa3NcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9kZXYuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9kZXYtdGFsa3MuaGVyb2t1YXBwLmNvbS9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9EZXYtdGFsa3NcIixcclxuICAgIGNhdGVnb3J5OiBbXCJub2RlXCIsIFwibW9uZ29cIiwgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNvY2lhbCBNZWRpYSBhcHAgZm9yIGRldmVsb3BlcnMgd2hvIGNhbiBzaGFyZSBwcm9qZWN0LGNyZWF0ZSBwb3N0cyxldGMuLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJOb2RlXCIsXHJcbiAgICAgIFwiRXhwcmVzc1wiLFxyXG4gICAgICBcIk1vbmdvXCIsXHJcbiAgICAgIFwiUkVTVCBBUElcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFsdGltZSBDaGF0IEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NoYXRhcHAuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zdW1pdC1jaGF0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NoYXQtYXBwLXNvY2tldC5pby1yZWFjdC1ub2RlXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQmFzaWMgUmVhbHRpbWUgQ2hhdCBBcHAgd2hlcmUgb25lIGNhbiBjcmVhdGUgYSByb29tIGNhbiB0YWxrIHRvIGVhY2ggb3RoZXJcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJOb2RlXCIsIFwiRXhwcmVzc1wiLCBcIlNvY2tldFwiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIlR3ZWV0ZXIgQ2xvbmVcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90d2VldG1lLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHA6Ly9zdW1heHR3ZWV0bWUucHl0aG9uYW55d2hlcmUuY29tL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L3R3ZWV0bWVcIixcclxuICAgIGNhdGVnb3J5OiBbXCJkamFuZ29cIiwgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkZpcnN0IERqYW5nbyBQcm9qZWN0IDopIHwgVHlwaWNhbCBTb2NpYWwgTWVkaWEgQXBwIHdoZXJlIG9uZSBjYW4gcG9zdCxsaWtlICxjb21tZW50IGV0Y1wiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIkRqYW5nb1wiLCBcIkRqYW5nbyBSRVNUIEFQSVwiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkNvbG9yIENsYXNzaWZpY2F0aW9uIHVzaW5nIHRmLmpzXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvY29sb3IuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiISNcIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9jb2xvci1jbGFzc2lmaWNhdGlvblwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImV4cHJlc3NcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUcmllZCBNTCB3aXRoIEpTIDopIHwgdGhpcyBhcHAgY2xhc3NpZmllcyBhIGNvbG9yIHVzaW5nIENOTiBhbGdvcml0aG0gaW4gYnJvd3NlclwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJFeHByZXNzXCIsIFwiVGVuc29yRmxvdy5qc1wiLCBcIlZhbmlsbGEganNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIllvdVR1YmUgdXNpbmcgWW91VHViZSBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy95b3V0dWJlQ2xvbmUucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9ub3QtdXR1YmUud2ViLmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC95b3V0dWJlLWNsb25lLXR1dG9yaWFsLXVwXCIsXHJcbiAgICBjYXRlZ29yeTogW1wiZXhwcmVzc1wiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRnVsbChhbG1vc3QpIEZ1bmN0aW9uYWwgWW91VHViZSByZXBsaWNhIHdoZXJlIG9uZSBjYW4gbG9naW4gd2l0aCBoaXMvaGVyIHlvdXR1YmUgYWNjb3VudCB0byBlbmpveSBcIm5vdC1Zb3VUdWJlXCIuVXNlciBjYW4gbGlrZSBhIHZpZGVvLGNvbW1lbnQgb24gYSB2aWRlbyAmIE11Y2ggTW9yZSAnLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3RcIixcclxuICAgICAgXCJSZWR1eFwiLFxyXG4gICAgICBcIkZpcmViYXNlIEF1dGhcIixcclxuICAgICAgXCJZb3VUdWJlIEFQSVwiLFxyXG4gICAgICBcIlNhc3NcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZvb3RiYWxsIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2Zvb3RiYWxsLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vby1teS1nb2FsLndlYi5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvZm9vdGJhbGwtYXBwXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJvIG15IGdvYWwgcmVwbGljYSB3aGVyZSBhbiB1c2VyIGNhbiBrZWVwIGFuIGV5ZSBvbiBoaXMgZmF2b3JpdGUgY2x1Yi5UaGlzIGFwcCB3aWxsIGtlZXAgcHJvdmlkaW5nIFxcbiBhbGwgdGhlIHN0YXRpc3RpY3Mgb2YgdGhhdCBjbHViLmFsbCB0aGUgZmFucyBjYW4gYWxzbyBjaGF0IFwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiRmlyZWJhc2UgQXV0aFwiLCBcIkFQSVwiLCBcIlNhc3NcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHtcclxuICBHZXRTZXJ2ZXJTaWRlUHJvcHMsXHJcbiAgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCxcclxuICBHZXRTdGF0aWNQcm9wcyxcclxuICBHZXRTdGF0aWNQcm9wc0NvbnRleHQsXHJcbiAgTmV4dFBhZ2UsXHJcbn0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkXCI7XHJcbmltcG9ydCB7IHNlcnZpY2VzIH0gZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgQWJvdXQ6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHNlcnZpY2VzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgcHgtNiBwdC0xIFwiPlxyXG4gICAgICA8aDYgY2xhc3NOYW1lPVwibXktMyB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICBJIGFtIGN1cnJlbnRseSBwdXJzdWluZyBCLlRlY2ggRGVncmVlKEZpbmFsIFllYXIpIGluIENvbXB1dGVyIFNjaWVuY2VcclxuICAgICAgICBFbmdpbmVlcmluZyBmcm9tIEFjYWRlbXkgb2YgVGVjaG5vbG9neS4gSSBoYXZlIDMrIHllYXJzIG9mIGV4cGVyaWVuY2UgaW5cclxuICAgICAgICBXZWIgRGV2ZWxvcG1lbnQgYW5kIEkgaGF2ZSBhIFlvdXR1YmUgQ2hhbm5lbCB3aGVyZSBJIHRlYWNoIEZ1bGwgU3RhY2tcclxuICAgICAgICBXZWIgRGV2ZWxvcG1lbnRcclxuICAgICAgPC9oNj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTQgbXQtNSBiZy1ncmF5LTQwMCBkYXJrOmJnLWRhcmstMTAwIFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMS41cmVtXCIsIG1hcmdpblJpZ2h0OiBcIi0xLjVyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgIFdoYXQgSSBhbSBkb2luZ1xyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBteS0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICB7LyogY2hpbGRyZW4ncyBpbml0aWFsIGFuZCBhbmltYXRlIHByb3BlcnR5IHNob3VsZCBiZSBzYW1lIGFzIHRoZSBwYXJlbnQgZHVyaW5nIGEgc3RhZ2dlciBlZmZlY3QgICovfVxyXG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwLTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWRhcmstMjAwIG1kOmNvbC1zcGFuLTEgXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc2VydmljZT17c2VydmljZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8hY2FsbGVkIGV2ZXJ5IHRpbWUgIHRoZSBwYWdlIHJlZnJlc2hlZFxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzJylcclxuLy8gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coZGF0YSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IGRhdGEuc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbi8vIWNhbGxlZCBvbmx5IGR1cmluZyB0aGUgYnVpbGQgb2YgdGhlIHByb2plY3RcclxuLy8/IG1ha2Ugc3VyZSB0aGUgc2VydmVyKGxvY2FsaG9zdDozMDAwKVt0aGlzIHdpbGwgcmVjZWl2ZSB0aGUgcmVxdWVzdCBkdXJpbmcgYnVpbGRdIGlzIHJ1bm5pbmcgb24gYSB0ZXJtaW5hbCBkdXJpbmcgdGhlIGJ1aWxkXHJcbi8vPyBhbHNvIG5lZWQgdG8gY2hhbmdlIHRoZSBsb2NhbGhvc3QgZHVyaW5nIHRoZSBkZXBsb3ltZW50IHwgc2VlIHRoZSB0b2RvXHJcbi8vIGh0dHBzOi8vYXVkZTUzLm1lZGl1bS5jb20vc2V0LWVudmlyb25tZW50LXZhcmlhYmxlcy13aXRoLW5leHQtanMtYW5kLXZlcmNlbC1lNTQ0YzA0NjBhNDhcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dFxyXG4vLyApID0+IHtcclxuLy8gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcblxyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IHsgc2VydmljZXMgfSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coeyBzZXJ2aWNlcyB9KVxyXG4vLyAgICByZXR1cm4geyBwcm9wczogeyBzZXJ2aWNlczogc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==