@props([
    'name',
    'label' => '',
    'value' => '1',
    'checked' => false,
])


<label class="inline-flex items-center space-x-2 cursor-pointer">
    <input
        type="checkbox"
        name="{{ $name }}"
        value="{{ $value }}"
        {{ $attributes->merge(['class' => 'rounded border-gray-300 text-gray-800 shadow-sm focus:ring-gray-500']) }}
    >
    @if($label)
        <span class="ml-2 text-sm text-gray-700">{{ $label }}</span>
    @endif
</label>
