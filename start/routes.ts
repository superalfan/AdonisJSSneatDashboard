/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'




router.get('/', (ctx: HttpContext) => {
  return ctx.view.render('pages/home', {
    title: 'Home',
  })
})

router.get('/dashboard', (ctx: HttpContext) => {
  return ctx.view.render('pages/home', {
    title: 'Dashboard',
  })
})

router.get('/without-menu', (ctx: HttpContext) => {
  return ctx.view.render('pages/withoutmenu', {
    title: 'Without Menu',
  })
})

router.get('/without-navbar', (ctx: HttpContext) => {
  return ctx.view.render('pages/withoutnavbar', {
    title: 'Without Navbar',
  })
})

router.get('/container', (ctx: HttpContext) => {
  return ctx.view.render('pages/container', {
    title: 'Container',
  })
})

router.get('/fluid', (ctx: HttpContext) => {
  return ctx.view.render('pages/fluid', {
    title: 'Fluid',
  })
})

router.get('/blank', (ctx: HttpContext) => {
  return ctx.view.render('pages/blank', {
    title: 'Blank',
  })
})

router.get('/account', (ctx: HttpContext) => {
  return ctx.view.render('pages/account', {
    title: 'Account',
  })
})

router.get('/notifications', (ctx: HttpContext) => {
  return ctx.view.render('pages/notifications', {
    title: 'Notifications',
  })
})

router.get('/connections', (ctx: HttpContext) => {
  return ctx.view.render('pages/connections', {
    title: 'Connections',
  })
})

router.get('/login', (ctx: HttpContext) => {
  return ctx.view.render('pages/login', {
    title: 'Login',
  })
})

router.get('/register', (ctx: HttpContext) => {
  return ctx.view.render('pages/register', {
    title: 'Register',
  })
})

router.get('/forgot-password', (ctx: HttpContext) => {
  return ctx.view.render('pages/forgot-password', {
    title: 'Forgote Password',
  })
})

router.get('/errors', (ctx: HttpContext) => {
  return ctx.view.render('pages/errors', {
    title: 'Errors',
  })
})

router.get('/under-maintenance', (ctx: HttpContext) => {
  return ctx.view.render('pages/undermaintenance', {
    title: 'Under Maintenance',
  })
})

router.get('/card', (ctx: HttpContext) => {
    return ctx.view.render('pages/card', {
      title: 'Card',
    })
  })

  router.get('/accordion', (ctx: HttpContext) => {
    return ctx.view.render('pages/accordion', {
      title: 'Accordion',
    })
  })

  router.get('/alert', (ctx: HttpContext) => {
    return ctx.view.render('pages/alert', {
      title: 'Alert',
    })
  })

  router.get('/badges', (ctx: HttpContext) => {
    return ctx.view.render('pages/badges', {
      title: 'Badges',
    })
  })

  router.get('/buttons', (ctx: HttpContext) => {
    return ctx.view.render('pages/buttons', {
      title: 'Buttons',
    })
  })

  router.get('/carousel', (ctx: HttpContext) => {
    return ctx.view.render('pages/carousel', {
      title: 'Carousel',
    })
  })

  router.get('/collapse', (ctx: HttpContext) => {
    return ctx.view.render('pages/collapse', {
      title: 'Collapse',
    })
  })

  router.get('/dropdowns', (ctx: HttpContext) => {
    return ctx.view.render('pages/dropdowns', {
      title: 'Dropdowns',
    })
  })

  router.get('/footer', (ctx: HttpContext) => {
    return ctx.view.render('pages/footer', {
      title: 'Footer',
    })
  })

  router.get('/list-groups', (ctx: HttpContext) => {
    return ctx.view.render('pages/listgroups', {
      title: 'List Groups',
    })
  })

  router.get('/modals', (ctx: HttpContext) => {
    return ctx.view.render('pages/modals', {
      title: 'Modals',
    })
  })

  router.get('/navbar', (ctx: HttpContext) => {
    return ctx.view.render('pages/navbar', {
      title: 'Navbar',
    })
  })

  router.get('/offcanvas', (ctx: HttpContext) => {
    return ctx.view.render('pages/offcanvas', {
      title: 'Offcanvas',
    })
  })

  router.get('/pagination-breadcrumbs', (ctx: HttpContext) => {
    return ctx.view.render('pages/paginationbreadcrumbs', {
      title: 'Pagination & Breadcrumbs',
    })
  })

  router.get('/progress', (ctx: HttpContext) => {
    return ctx.view.render('pages/progress', {
      title: 'Progress',
    })
  })

  router.get('/spinners', (ctx: HttpContext) => {
    return ctx.view.render('pages/spinners', {
      title: 'Spinners',
    })
  })

  router.get('/tabs-pills', (ctx: HttpContext) => {
    return ctx.view.render('pages/tabspills', {
      title: 'Tabs & Pills',
    })
  })

  router.get('/toasts', (ctx: HttpContext) => {
    return ctx.view.render('pages/toasts', {
      title: 'Toasts',
    })
  })

  router.get('/tooltips-popovers', (ctx: HttpContext) => {
    return ctx.view.render('pages/tooltipspopovers', {
      title: 'Tooltips & Popovers',
    })
  })

  router.get('/typography', (ctx: HttpContext) => {
    return ctx.view.render('pages/typography', {
      title: 'Topography',
    })
  })


  //================= Extended UI ====================

  router.get('/perfect-scrollbar', (ctx: HttpContext) => {
    return ctx.view.render('pages/perfectscrollbar', {
      title: 'Perfect Scrollbar',
    })
  })

  router.get('/text-divider', (ctx: HttpContext) => {
    return ctx.view.render('pages/textdivider', {
      title: 'Text Divider',
    })
  })

  //====================================================

  router.get('/boxicons', (ctx: HttpContext) => {
    return ctx.view.render('pages/boxicons', {
      title: 'Boxicons',
    })
  })


  //========= Form Elements ============================

  router.get('/basic-inputs', (ctx: HttpContext) => {
    return ctx.view.render('pages/basicinputs', {
      title: 'Basic Inputs',
    })
  })

  router.get('/input-groups', (ctx: HttpContext) => {
    return ctx.view.render('pages/inputgroups', {
      title: 'Input Groups',
    })
  })

//================= Form Layouts ========================
  
router.get('/vertical-form', (ctx: HttpContext) => {
    return ctx.view.render('pages/verticalform', {
      title: 'Vertical Form',
    })
  })

  router.get('/horizontal-form', (ctx: HttpContext) => {
    return ctx.view.render('pages/horizontalform', {
      title: 'Horizontal Form',
    })
  })

//========================================================

router.get('/tables', (ctx: HttpContext) => {
  return ctx.view.render('pages/tables', {
    title: 'Tables',
  })
})


//================ Misc ==================================

router.get('/support', (ctx: HttpContext) => {
  return ctx.view.render('pages/support', {
    title: 'Support',
  })
})

router.get('/documentation', (ctx: HttpContext) => {
  return ctx.view.render('pages/documentation', {
    title: 'Documentation',
  })
})