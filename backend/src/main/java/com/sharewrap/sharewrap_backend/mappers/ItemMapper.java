package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.models.Item;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {
    Item toItem(ItemDto itemDto);

    ItemDto toItemDto(Item item);

    List<ItemDto> toItemDtos(List<Item> items);

    void updateItem(@MappingTarget Item target, Item source);
}
