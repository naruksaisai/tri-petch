import '../style/HomePage.css'
import soccer from '../assets/graphic-desktop.png';
import basketball from '../assets/basketball.png';

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
                  <div className='sub-title'>
                      {titleNumber('03')} 
                      GROWTH
                  </div>
                  <div className='last-content-detail'>Resources and tools for you to get better as a student Athelte. 
                    Access to training classes, tutor sessions, etc.
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upper-container"> 
          <div className="lower-image-container">
            <img src={basketball} alt="Image 1" className="lower-image"/>
          </div>
          <div className="content-container">
            <div className='header-container'>
              <div className='lower-left-component'></div>
              <div className='header'>
                ATHLETS
              </div>
            </div>
            <div className='connection-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                <div className='sub-title'>CONNECTION</div>
                <div className='content-detail'>Connect with coaches directly, you can ping coaches to view profile.</div>
              </div>
            </div>
            <div className='collaboration-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                  <div className='sub-title'>COLLABORATION</div>
                  <div className='content-detail'>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</div>
              </div>
              </div>
            <div className='lower-growth-container'>
              <div className='lower-left-component'></div>
              <div className='right-component'>
                  <div className='last-sub-title'>GROWTH</div>
                  <div className='last-content-detail'>Resources and tools for you to get better as a student Athelte. 
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
