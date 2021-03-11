import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import HomeComponents from './Home'
import "./style.css"


const element = document.querySelector("#root")
reactDOM.render(<HomeComponents /> , element)