import React from 'react'
import Banner from '../components/Home/Banner'
import {connect, useDispatch} from 'react-redux'
import Courses from '../components/Home/Courses'
import Why from '../components/Home/Why'
import {setDark} from '../redux/darkSlice'
import Testimonials from '../components/Home/Testimonials'
import Articles from '../components/Home/Articles';



// Pull dark state from global redux state (state param) and pass as property
const mapStateToProps = state => ({
  dark: state.theme.dark
});

// Our redux state is designed to store dark decision
// looks like this
// {theme: {dark: false}, as we dispatch actions, it will update this state in a reducer



function Home({dark}) {
    // dispatch is what sends actions to our reducer
    const dispatch = useDispatch();

    

    return (
        <div className={dark ? 'dark' : 'light'}>
            <Banner dark={dark} setDark={()=>dispatch(setDark(true))} setLight={()=>dispatch(setDark(false))}/>
            <Why />
            <Courses />
            <Testimonials />
            <Articles />
        </div>
    )
}

export default connect(mapStateToProps)(Home)
