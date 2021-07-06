<?php

namespace App\Ui\Tables;

use Illuminate\Database\Eloquent\Builder;
use Macrame\Table\Filter\Schema as FilterSchema;
use Macrame\Table\Schema;
use Macrame\Table\Table;

class PostTable extends Table
{
    /**
     * Edit table schema.
     *
     * @param  Schema $table
     * @throws Foo
     * @return void
     */
    public function schema(Schema $table)
    {
        $table->col()->label('Title')->value('title');
        $table->col()->label('Text')->value('text');
    }

    /**
     * Add filters.
     *
     * @param  FilterSchema $filters
     * @return void
     */
    public function filters($filters)
    {
        $filters->add('lorem', [$this, 'loremFilter']);
        // ->tag('From :starts_at to :ends_at');
    }

    public function loremFilter($builder, $attributes)
    {
        //
    }

    /**
     * Handle search.
     *
     * @param  Builder $query
     * @param  string  $search
     * @return void
     */
    public function search(Builder $query, $search)
    {
        $query->where(function ($query) use ($search) {
            $query
                ->where('title', 'LIKE', "%{$search}%")
                ->orWhere('text', 'LIKE', "%{$search}%");
        });
    }
}
