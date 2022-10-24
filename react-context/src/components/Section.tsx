import { DetailedHTMLProps, useContext } from "react";
import { LevelContext } from "../LevelContext";


export const Section = ({ children }: DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    let level = useContext(LevelContext);

    return (
      <section className="section">
        <LevelContext.Provider value={level++}>
          {children}
        </LevelContext.Provider>
      </section>
    );
  }