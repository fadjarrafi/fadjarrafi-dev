import Image from 'next/image'

export default function Capsule() {
  return (
    <div className="mr-3 flex flex-row flex-wrap gap-2 pt-3">
      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/html.svg"
          alt="html"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>HTML</h4>
      </div>
      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/css.svg"
          alt="css"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>CSS</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/php.svg"
          alt="php"
          width={30}
          height={30}
          style={{ margin: 'auto 0' }}
        />
        <h4 style={{ margin: 'auto' }}>PHP</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/javascript.svg"
          alt="javascript"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Javascript</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/golang.svg"
          alt="golang"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>GO</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/bootstrap.svg"
          alt="bootstrap"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Bootstrap</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/tailwind.svg"
          alt="tailwind"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Tailwind</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/jquery.svg"
          alt="jquery"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>JQuery</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/laravel.svg"
          alt="laravel"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Laravel</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/gin-gonic.png"
          alt="gin-gonic"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Gin</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/nodejs.svg"
          alt="nodejs"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Node JS</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/mysql.svg"
          alt="mysql"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>MySQL</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/git.svg"
          alt="git"
          width={30}
          height={30}
          style={{ margin: 'auto 0' }}
        />
        <h4 style={{ margin: 'auto' }}>Git</h4>
      </div>

      <div className="capsule border border-gray-700">
        <Image
          src="/static/images/postman.svg"
          alt="postman"
          width={30}
          height={30}
          style={{ margin: '0' }}
        />
        <h4 style={{ margin: 'auto' }}>Postman</h4>
      </div>
    </div>
  )
}
