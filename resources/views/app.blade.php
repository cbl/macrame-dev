<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @php $app = explode('/', request()->url())[3]; @endphp
    <link href="{{ asset("/css/{$app}/app.css") }}" rel="stylesheet">
    <script src="{{ asset("/js/{$app}/app.js") }}" defer></script>
  </head>
  <body class="text-base bg-gray-100">
    @inertia
  </body>
</html>
