import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


const MyRoute = () => {
  return (
    <nav>
      <ul className="flex Several-Links  gap-5">
        <li><NavLink className="Link flex" to="/">
          <CiHome className="md:hidden block text-2xl" />
          <span className="md:block hidden">About</span>
        </NavLink></li>
        <li><NavLink className="Link flex" to="/skills">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nO2ae2iXZRTHP9pFdCOLMudSgm6WZVaO1h3qjy5aw4gK7UYRFFnZbdkoqCwqokSwuylWlEEXzf2R0TQizIjK0hSJAjVzZqbkzGy5/eLI94HDy3v7vb/fNgW/8LB3z3POeW7nObcNKsOBwJnAfcAbwFJgA7AV2A106bsd+Bp4D3gMGAccyl6ARuAV4E+gVLD9CywCbgAO7u0NnAd8FlnQj8DLwM3ABcBw4DDgAKCfvodp89cATwFLtJEgYyNwl264R3EIMAvo1sR/AE8AIyuQaap1o1TOH8oYeggnAms00U6gBaip8hyXAKs1xz9St6pijHsH3wLH0XMYAMzUXHbzk6sl2Ba9WYI/BAbm4JkS86itrxxMlrWzdhUVwlRnhRbSChyUk+/1mI1YX7m4V7wdwLFUgBnu8dXGjA8BFgANkf5l4rtQraQ+jwbxmow0vCn+z2X9ysYZcmadwOiY8aHASucLmoH+usW/1H+EWkl9NaJpdmZ3pWQlYTCwSbRXF9lIq5ifjRmrc9ZlkzPH3wDb9G1ePKBdfdtEEx5yWOBqyUzC/aJbUe6tnKKJOnSiUcyS4B1aQJN8SjCb70ZOzxzgB7rd4H+axLtDfa+mrGeQ2/RF5WxkupheSBivd5bMTgt57eeAo1PkHgM8I1rDHZKxOUO9DI+K9iVywq7uNzFFH7HHFbo10/WxlI/j3W1MyEE/2oUx9s5yOT9jWJ+Ddr5o50T6LwcWa6Ed+h6fYI0+Ij9+Fs/ZeYjvFPHsDLpBOh2zbCe7/idTIt1pjq5BN7pWgWUezJSce/IQzxax6W8Ut+uhL3cP107b30Qwxw/qLVmb6syt5SABS9W3Vd+vZUQAt4p+bp6NfJFiHfzp2k2sAia68SUas4VHMVVjba7vNmftfEtCo8btIDOxVsSnxoyFiRqlWlFs17jdQhT1zjFGcaQOLmsjtYq9OmUsUhEWMzxlIzbp4VXayED5raYcGzG8JZqFZOA/EcZFuVEVaI84vsUpqvVQjGo9kmAU0lAvS2h0F6cR/i2iONWZose+zMVT5rEDxrvHPjXhsV/m6Jerbx3wqVJlK2BkoUV8q9LS4nUiGpEhrEaxU6c8dsC0FPP7uKMLb2JNgah2gPMpdycRfSeC0zKE9XcBoIUdHuOkQtvV2iI3gZxoSZauSHje5Ex3XDy4Jws0gkkZgppdABj3uLMwwqXP5WaPAYvS4q8HNPgiyWiQznfrZFC8NUcWKA5Ws7pFk4cKyQQXMRepmpwk1d4dlzOd5RKeJCxwuUidIuDwmLukLtdHMs3f3VvZpQMb64yLhR9FMF3870QHLC/fosGkUxrissMQwXYriNzo0uNQtwobsKLe2+73Lv2cX0GVcaRk/BI3+HwO9RrqssTNCuuDNQspsi3uXNH84Hib3A29X0ZRI4pRwCeSYz9ji3Hd8hVpxYE6+ZWQKAX8JOHnuNKQ3UQ0LGkpWB4dBcxzN2oG5/Qk4oU5UtCsN+SbLboamOc2sFPvLy3f3xOU7ZKaWEWlHDws++5bNLEqipLajBhNSMTTYlpatKbUAyjliMdiw+YNYvTmdJ/biOE6Mf5agXXZKzbSD/hezFaf2mc3ElLSEOD1Jfo7R1oItYpizbccRd9hmDZi0UNhBL/iiw29jStdqFMYIWy3LK6v8HE5da0knC8hX9I3mOjCEfsLcUV/gispxextTFLOYvPfVKmwwSl1qUpxLXCp/nvCDswyzhPU3+ZMrpVj+96G55Cb1LbIMVd9wmojyP1KCdJ6qXCr/hOitqcm3FfkJmL/RjKw/0aKYq9Xrf8B+isLGAf7PkIAAAAASUVORK5CYII=" alt="for-experienced" 
          className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Skills</span>
        </NavLink></li>
        <li><NavLink className="Link flex" to="/work">
          <img src="https://cdn-icons-png.flaticon.com/512/2593/2593066.png" className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Work</span>
        </NavLink></li>
        <li><NavLink className="Link flex" to="/contact">
            <IoCallOutline className="md:hidden block text-2xl" />
            <span className="md:block hidden">Contact</span>
        </NavLink></li>
      </ul>
    </nav>
  );
};

export default MyRoute;
