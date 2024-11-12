import { To } from "react-router-dom";

export const PathNames = {
    TestLink1: "testLink1",
    TestLink2: "testLink2",
    TestLink3: "testLink3",
    WithoutHeader: "header",
    Info: "info",
    NotFound: "*"
}

export const TestLinkPath1 : To = {
    pathname: PathNames.TestLink1,
}
export const TestLinkPath2 : To = {
    pathname: PathNames.TestLink2,
}
export const TestLinkPath3 : To = {
    pathname: PathNames.TestLink3,
}

export const WithoutHeaderTo : To = {
    pathname: PathNames.WithoutHeader,
}
