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

    public function dropdown(Page $page)
    {
        return $page->component('dropdown');
    }

    public function sidebar(Page $page)
    {
        return $page->component('sidebar');
    }
}
