<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Macrame\Ui\Page;
use Illuminate\Http\Request;

class DevController extends Controller
{
    public function buttons(Page $page)
    {
        $page->component('buttons');

        return $page;
    }

    public function badges(Page $page)
    {
        $page->component('badges');

        return $page;
    }

    public function dropdown(Page $page)
    {
        $page->component('dropdown');

        return $page;
    }
}
