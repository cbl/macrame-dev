<?php

namespace App\Http\Controllers;

use Macrame\Ui\Page;

class DevController extends Controller
{
    public function buttons(Page $page)
    {
        return $page->component('buttons');
    }

    public function card(Page $page)
    {
        return $page->component('card');
    }

    public function badges(Page $page)
    {
        return $page->component('badges');
    }

    public function toggle(Page $page)
    {
        return $page->component('toggle');
    }
    
    public function radioGroup(Page $page)
    {
        return $page->component('radio-group');
    }
    
    public function checkbox(Page $page)
    {
        return $page->component('checkbox');
    }
    
    public function checkboxGroup(Page $page)
    {
        return $page->component('checkbox-group');
    }

    public function dropdown(Page $page)
    {
        return $page->component('dropdown');
    }

    public function sidebar(Page $page)
    {
        return $page->component('sidebar');
    }
}
