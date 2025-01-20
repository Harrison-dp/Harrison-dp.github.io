import { createContext, useContext } from "react";
import { Home } from "../Pages/home";
import { MessagingPage } from "../Pages/Messaging";
import { LogoPage } from "../Pages/Logo";
import { GuidlinesSubmenu } from "../components/Menus";
import { ColoursPage } from "../Pages/colours";
import { ComingSoon } from "../Pages/comingsoon";
import { FontPage } from "../Pages/Font";
import { IconsPage } from "../Pages/Icons";


const InternalContext = createContext(undefined);

export const InternalProvider = ({ children }) => {
    class Page {
        constructor(name='',to='/',component=<Home/>, rank = 2,subMenu=undefined){
          this.name = name
          this.to = to
          this.component = component
          this.rank = rank
          this.subMenu = subMenu
        }
      }
      const pages = [
        new Page('Home','/',<ComingSoon/>,1),
        new Page('Brand Guidlines','Guidlines/',<MessagingPage/>,1,<GuidlinesSubmenu/>),
        new Page('Messaging','Guidlines/',<MessagingPage/>,2,<GuidlinesSubmenu/>),
        new Page('Logo','Guidlines/logo',<LogoPage/>,2,<GuidlinesSubmenu/>),
        new Page('Fonts','Guidlines/fonts',<FontPage/>,2,<GuidlinesSubmenu/>),      
        new Page('Icons','Guidlines/icons',<IconsPage/>,2,<GuidlinesSubmenu/>),
        new Page('Colours','Guidlines/colours',<ColoursPage/>,2,<GuidlinesSubmenu/>),
        new Page('Brand In Use','Guidlines/brandinuse',<ComingSoon/>,2,<GuidlinesSubmenu/>),
        new Page('Request Forms','forms',<ComingSoon/>,1),
    ]
    // console.log('Here')
    return (
        <InternalContext.Provider value={pages}>
            {children}
        </InternalContext.Provider>
    );
};

export const useInternalContext = () => useContext(InternalContext);