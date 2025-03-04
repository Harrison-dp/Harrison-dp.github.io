import { Section } from "./Elements"
import { Logo } from "./logo"
import { Bcorp, Facebook, Instagam, LinkedIn, TikTok, YouTube } from "./Socialbuttons"
import { FP, P2, P3 } from "./TextStyles"

export const Footer=()=>{
    return(
        <Section AICenter far>
            <Section className='main' horizontal jSpread AICenter>
                <Section horizontal AICenter far>
                    <Logo text margin={0} height='115'/>
                    <Section>
                        <Section tight>
                        <P3>4th Floor</P3>
                        <P3>3 Waterhouse Square</P3>
                        <P3>Chancery Lane, London</P3>
                        <P3>WC2B 6NH</P3>
                        </Section>
                        <Section horizontal AICenter>
                            <Instagam/>
                            <LinkedIn/>
                            <Facebook/>
                            <YouTube/>
                            <TikTok/>
                        </Section>
                    </Section>
                </Section>
                <Bcorp/>
            </Section>
            <Section className='main'><FP Accent>Copyright © 2025, David Phillips UK. All rights reserved. See our terms of use and privacy notice.</FP></Section>
        </Section>
    )
}