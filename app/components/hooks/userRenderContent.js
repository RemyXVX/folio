import About from './../../pages/about/page';
import Projects from './../../pages/projects/page';
import Contacts from './../../pages/contact/page';
import Home from './../../pages/home/page';

const useRenderContent = (currentView) => {
  const renderContent = () => {
    const containerClass = "mx-auto bg-gray-100 dark:bg-slate-800 py-4";

    switch (currentView) {
      case "about":
        return (
          <div className={containerClass}>
            <About />
          </div>
        );
      case "projects":
        return (
          <div className={containerClass}>
            <Projects />
          </div>
        );
      case "contact":
        return (
          <div className={containerClass}>
            <Contacts />
          </div>
        );
      default:
        return (
          <div className={containerClass}>
            <Home />  
          </div>
        );
    }
  };

  return renderContent;
};

export default useRenderContent;
