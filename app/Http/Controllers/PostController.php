<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Macrame\Ui\Page;
use App\Ui\Forms\PostForm;
use App\Ui\Tables\PostTable;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function items(Request $request, PostTable $table)
    {
        return $table->items(
            $request,
            Post::query()
        );
    }

    public function index(Page $page)
    {
        $page->table(
            (new PostTable)->syncUrl(),
            route('posts.items')
        );
        
        return $page;
    }

    public function show(Page $page, Post $post)
    {
        $page->form(
            new PostForm($post),
            route('posts.update', $post)
        );
        
        return $page;
    }

    public function update(Request $request, Post $post)
    {
        return (new PostForm($post))->update($request);
    }
}
