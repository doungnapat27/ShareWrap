package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.RegisterDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User registerToUser(RegisterDto registerDto);
}
