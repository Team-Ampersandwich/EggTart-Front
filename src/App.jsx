import {
    Main,
    MediaDiv,
} from './styledComponent';

import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import {useState} from 'react';;

function App() {
    const initialPostList = [
        {id : 1, title : '리액트 공부는 재미있어.', replCount : 1},
        {id : 2, title : '프론트 공부 열심히 해.', replCount : 43},
        {id : 3, title : '파이팅^^.', replCount : 1},
    ];
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false)
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        setPostList((postList) => [
            ...postList, {id : 4, title :'공부는 열심히 하면 좋아.', replCount : 21},
        ]);
    };

    return (
        <>
            <ThemeProvider theme ={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <MediaDiv>
                    <Header darkMode = {darkMode} setDarkMode = {setDarkMode}/>
                    <Main>
                        <Slogun />
                        <ShowPostList loading = {loading} isPost = {isPost} postList = {postList} addPost = {addPost}/>
                    </Main>
                    <Footer />
                </MediaDiv>
            </ThemeProvider>    
        </>
    )
}

function App() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <>
            <ThemeProvider theme ={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <MediaDiv>
                    <Header darkMode = {darkMode} setDarkMode = {setDarkMode}/>
                    <Main>
                        <Slogun></Slogun>
                        <Routes>
                            <Route path = "/" element = {<ShowPostList></ShowPostList>}></Route>
                            <Route path = "/write" element = {<WritePost></WritePost>}></Route>
                            <Route paht = "/post/:postID" element = {<ShowPost></ShowPost>}></Route>
                        </Routes>
                    </Main>
                    <Footer />
                </MediaDiv>
            </ThemeProvider>    
        </>
    )
}

export default App;