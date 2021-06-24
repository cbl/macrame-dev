<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @php $app = explode('/', request()->url())[3]; @endphp
    <link href="{{ asset("/{$app}/css/app.css") }}" rel="stylesheet">
    <script src="{{ asset("/{$app}/js/app.js") }}" defer></script>
  </head>
  <body>
    @inertia
  </body>
</html>
