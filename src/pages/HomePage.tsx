import '../style/HomePage.css'
import soccer from '../assets/graphic-desktop.png';
import basketball from '../assets/basketball.png';
import tickRec from '../assets/tickRec.png';
import lightRec from '../assets/lightRec.png';
import pathSt from '../assets/pathSt.png';

const HomePage = () => {

  const titleNumber=(number:string)=>{
    return (
      <div className='number-component'>
        <div className='number-title'>{number}</div>
        <div className='number-underline'/>
      </div>
    )
  }

    return (
      <div>
        <div className="upper-container"> 
          <div className="upper-image-container">
            <img src={lightRec} alt="lightRec.png" className="upper-light-rectangle-image"/>
            <img src={tickRec} alt="tickRec" className="upper-tick-rectangle-image"/>
            <img src={pathSt} alt="tickRec" className="upper-pathst-image"/>
            <img src={soccer} alt="Image 1" className="upper-image"/>
          </div>
          <div className="content-container">
            <div className='header-container'>
              <div className='left-component'></div>
              <div className='header'>
                ATHLETS
              </div>
            </div>
            <div className='connection-container'>
              <div className='left-component'></div>
              <div className='right-component'>
                <div className='sub-title'>
                  {titleNumber('01')} 
                    CONNECTION
                </div>
                <div className='content-detail'>Connect with coaches directly, you can ping coaches to view profile.</div>
              </div>
            </div>
            <div className='collaboration-container'>
              <div className='left-component'></div>
              <div className='right-component'>
                  <div className='sub-title'>
                      {titleNumber('02')} 
                      COLLABORATION
                  </div>
                  <div className='content-detail'>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</div>
              </div>
              </div>
            <div className='growth-container'>
              <div className='left-component'></div>
              <div className='right-component'>
                  <div id='last-subtitle-component' className='sub-title'>
                      {titleNumber('03')} 
                      GROWTH
                  </div>
                  <div id='last-detail-component' className='content-detail'>Resources and tools for you to get better as a student Athelte. 
                    Access to training classes, tutor sessions, etc.
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upper-container"> 
          <div className="lower-image-container">
            <img src={lightRec} alt="lightRec" className="light-rectangle-image"/>
            <img src={tickRec} alt="tickRec" className="tick-rectangle-image"/>
            <img src={tickRec} alt="tickRec" id='lower-rectangle' className="tick-rectangle-image"/>
            <img src={basketball} alt="Image 1" className="lower-image"/>
            <img src={pathSt} alt="tickRec" className="pathst-image"/>
            <img src={pathSt} alt="tickRec" id='upper-pathst' className="pathst-image"/>
          </div>
          <div className="content-container">
            <div className='header-container'>
              <div className='lower-left-component'></div>
              <div className='lower-header'>
                PLAYERS
              </div>
            </div>
            <div id='lowwer-connection' className='connection-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                <div className='sub-title'>
                  {titleNumber('01')} 
                  CONNEECTION
                </div>
                <div className='content-detail'>Connect with talented athlete directly, you can watch their 
                  skills through video showreels directly from Surface 1.</div>
              </div>
            </div>
            <div className='collaboration-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                  <div className='sub-title'>
                      {titleNumber('02')} 
                      COLLABORATION
                    </div>
                  <div className='content-detail'>Work with recruiter to increase your chances of finding talented athlete.</div>
              </div>
              </div>
            <div className='lower-growth-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                  <div id='last-subtitle-component' className='sub-title'>
                    {titleNumber('03')} 
                    GROWTH
                  </div>
                  <div id='last-detail-component' className='content-detail'>Resources and tools for you to get better as a student Athelte. 
                    Access to training classes, tutor sessions, etc.
                  </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    )
}
export default HomePage;
