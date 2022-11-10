import {
    EachPostLi,
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';

import {
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
    faSlidersH,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ShowPostList({isPost, loading}){
    return (
        <>
            <PostSection>
                    <PostTitleDiv>
                        <FontAwesomeIcon icon = {faArrowsRotate} />
                        <PostTitle>익명게시판</PostTitle>
                        <FontAwesomeIcon icon = {faPenToSquare} />
                    </PostTitleDiv>
                    <PostListDiv>
                        {loading ? (
                                <LoadingDiv>
                                    <LoadingImg src = {'./loading.svg'}/>
                                </LoadingDiv>
                            ) : isPost ? (
                                    <LoadingDiv>
                                        아직 기록된 글이 없습니다.
                                    </LoadingDiv>
                            ) : (
                                <ul>
                                    <EachPostLi>
                                        <div>
                                            <FontAwesomeIcon 
                                                icon ={faLocationPin}
                                            />
                                            <PostLink>
                                                React가 너무 재미있어요.
                                            </PostLink>
                                        </div>
                                        <PostRepl>[35]</PostRepl>
                                    </EachPostLi>
                                </ul>
                            )}
                    </PostListDiv>
                </PostSection>
                <PagingSection>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon = {faArrowLeft}/>
                    </PagenumberDiv>
                    <PagenumberDiv>2</PagenumberDiv>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon ={faArrowRight}/>
                    </PagenumberDiv>
                </PagingSection>
        </>
    )
}

export default ShowPostList